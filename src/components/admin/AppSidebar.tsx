"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/lib/admin/SidebarContext";
import {
  ChevronDownIcon,
  GridIcon,
  HorizontaLDots,
  ImageIcon,
  InboxIcon,
  ListIcon,
  TableIcon,
} from "@/components/admin/icons";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string }[];
};

const navItems: NavItem[] = [
  { icon: <GridIcon />, name: "Dashboard", path: "/admin" },
  {
    name: "Products",
    icon: <TableIcon />,
    subItems: [
      { name: "All products", path: "/admin/products" },
      { name: "Add product", path: "/admin/products/add" },
    ],
  },
  { name: "Categories", icon: <ListIcon />, path: "/admin/categories" },
  { name: "Inquiries", icon: <InboxIcon />, path: "/admin/inquiries" },
  { name: "Media", icon: <ImageIcon />, path: "/admin/media" },
];

export default function AppSidebar() {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {},
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = useCallback(
    (path: string) => {
      if (path === "/admin") return pathname === "/admin";
      return pathname === path || pathname.startsWith(`${path}/`);
    },
    [pathname],
  );

  useEffect(() => {
    let matched = false;
    navItems.forEach((nav, index) => {
      nav.subItems?.forEach((sub) => {
        if (isActive(sub.path)) {
          setOpenSubmenu({ type: "main", index });
          matched = true;
        }
      });
    });
    if (!matched) setOpenSubmenu(null);
  }, [pathname, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      const el = subMenuRefs.current[key];
      if (el) {
        setSubMenuHeight((prev) => ({ ...prev, [key]: el.scrollHeight || 0 }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number) => {
    setOpenSubmenu((prev) =>
      prev?.type === "main" && prev.index === index
        ? null
        : { type: "main", index },
    );
  };

  const showLabel = isExpanded || isHovered || isMobileOpen;

  return (
    <aside
      className={`fixed top-0 left-0 z-50 flex h-screen flex-col border-r border-gray-200 bg-white px-5 text-gray-900 transition-all duration-300 ease-in-out dark:border-gray-800 dark:bg-gray-900
        ${isExpanded || isMobileOpen ? "w-[290px]" : isHovered ? "w-[290px]" : "w-[90px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex py-8 ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}
      >
        <Link href="/admin" className="flex items-center gap-3">
          {showLabel ? (
            <Image
              src="/logos/wordmark-dark.webp"
              alt="HOME HUB"
              width={160}
              height={56}
              className="h-9 w-auto dark:brightness-0 dark:invert"
              priority
            />
          ) : (
            <Image
              src="/icon.png"
              alt="HOME HUB"
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg object-contain"
              priority
            />
          )}
        </Link>
      </div>

      <div className="no-scrollbar flex flex-1 flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mb-6">
          <div>
            <h2
              className={`mb-4 flex text-xs uppercase leading-[20px] text-gray-400 ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "justify-start"
              }`}
            >
              {showLabel ? "Menu" : <HorizontaLDots />}
            </h2>
            <ul className="flex flex-col gap-1.5">
              {navItems.map((nav, index) => (
                <li key={nav.name}>
                  {nav.subItems ? (
                    <>
                      <button
                        type="button"
                        onClick={() => handleSubmenuToggle(index)}
                        className={`menu-item group ${
                          openSubmenu?.index === index
                            ? "menu-item-active"
                            : "menu-item-inactive"
                        } cursor-pointer ${
                          !isExpanded && !isHovered
                            ? "lg:justify-center"
                            : "lg:justify-start"
                        }`}
                      >
                        <span
                          className={
                            openSubmenu?.index === index
                              ? "menu-item-icon-active"
                              : "menu-item-icon-inactive"
                          }
                        >
                          {nav.icon}
                        </span>
                        {showLabel && (
                          <span className="menu-item-text">{nav.name}</span>
                        )}
                        {showLabel && (
                          <ChevronDownIcon
                            className={`ml-auto transition-transform duration-200 ${
                              openSubmenu?.index === index
                                ? "rotate-180 text-brand-500"
                                : ""
                            }`}
                          />
                        )}
                      </button>
                      {showLabel && (
                        <div
                          ref={(el) => {
                            subMenuRefs.current[`main-${index}`] = el;
                          }}
                          className="overflow-hidden transition-all duration-300"
                          style={{
                            height:
                              openSubmenu?.index === index
                                ? `${subMenuHeight[`main-${index}`] ?? 0}px`
                                : "0px",
                          }}
                        >
                          <ul className="mt-2 ml-9 space-y-1">
                            {nav.subItems.map((sub) => (
                              <li key={sub.path}>
                                <Link
                                  href={sub.path}
                                  className={`menu-dropdown-item ${
                                    isActive(sub.path)
                                      ? "menu-dropdown-item-active"
                                      : "menu-dropdown-item-inactive"
                                  }`}
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    nav.path && (
                      <Link
                        href={nav.path}
                        className={`menu-item group ${
                          isActive(nav.path)
                            ? "menu-item-active"
                            : "menu-item-inactive"
                        }`}
                      >
                        <span
                          className={
                            isActive(nav.path)
                              ? "menu-item-icon-active"
                              : "menu-item-icon-inactive"
                          }
                        >
                          {nav.icon}
                        </span>
                        {showLabel && (
                          <span className="menu-item-text">{nav.name}</span>
                        )}
                      </Link>
                    )
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}

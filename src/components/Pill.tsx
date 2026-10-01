import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "./ArrowIcon";

type PillProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  outline?: boolean;
  light?: boolean;
  className?: string;
  type?: "button" | "submit";
};

export function Pill({
  children,
  href,
  onClick,
  outline,
  light,
  className = "",
  type = "button",
}: PillProps) {
  const classes = [
    "pill",
    outline ? "pill-outline" : light ? "pill-light" : "pill-solid border-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      <ArrowIcon />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}

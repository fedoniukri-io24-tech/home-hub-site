import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HOME HUB",
    template: "%s | HOME HUB",
  },
  description: "Showroom i Stockholm — ytterdörrar, innerdörrar, dolda dörrar och golv.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='10' fill='%23303419'/%3E%3Crect x='8' y='10' width='4' height='14' fill='%23F0E5D8'/%3E%3Crect x='13' y='14' width='4' height='10' fill='%23F0E5D8'/%3E%3Crect x='18' y='8' width='6' height='16' fill='%23F0E5D8'/%3E%3C/svg%3E",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

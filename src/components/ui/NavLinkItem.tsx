// components/NavLinkItem.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import type { NavLink } from "@/lib/nav-links";

interface NavLinkItemProps {
  link: NavLink;
  onClick?: () => void;
  variant?: "desktop" | "mobile";
}


export default function NavLinkItem({
  link,
  onClick,
  variant = "desktop",
}: NavLinkItemProps) {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  if (variant === "mobile") {
    return (
      <Link
        href={link.href}
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
        className={`
          block py-3 text-lg font-medium tracking-tight transition-colors
          ${isActive ? "text-white" : "text-slate-400 hover:text-white"}
        `}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <Link
      href={link.href}
      aria-current={isActive ? "page" : undefined}
      className="relative px-1 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
    >
      {link.label}
      {isActive && (
        <motion.span
          layoutId="active-nav-indicator"
          className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}
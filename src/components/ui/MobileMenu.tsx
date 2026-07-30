// components/MobileMenu.tsx
"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavLinkItem from "./NavLinkItem";
import { NAV_LINKS } from "@/lib/nav-links";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}


export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          {/* Slide-in panel */}
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-[80%] max-w-sm flex-col bg-slate-950/95 backdrop-blur-xl border-l border-white/10 px-8 pt-24 pb-10 lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col divide-y divide-white/5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLinkItem link={link} onClick={onClose} variant="mobile" />
                </li>
              ))}
            </ul>

            <Link
            href="/get-started"
              onClick={onClose}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-transform active:scale-95"
            >
                 Get Started
            </Link>
              </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
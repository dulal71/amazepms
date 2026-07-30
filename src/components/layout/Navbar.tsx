
"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";

import { NAV_LINKS } from "@/lib/nav-links";
import AmazeLogo from "../ui/Logo";
import NavLinkItem from "../ui/NavLinkItem";
import MobileMenu from "../ui/MobileMenu";

const SCROLL_THRESHOLD = 24; // px scrolled before the glass effect kicks in

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll(); // set initial state (e.g. on refresh mid-scroll)
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => setIsMobileOpen(false), []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }
      `}
    >
      <nav
        className=" container mx-auto flex  items-center justify-between px-6 py-4 lg:px-10"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <AmazeLogo size="sm" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLinkItem link={link} />
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <motion.a
          href="/get-started"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="hidden items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-900/30 transition-shadow hover:shadow-blue-700/50 lg:inline-flex"
        >
          Get Started
        </motion.a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-nav-menu"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:hidden"
        >
          {isMobileOpen ? (
            <HiXMark className="h-6 w-6" aria-hidden="true" />
          ) : (
            <HiBars3 className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div id="mobile-nav-menu">
        <MobileMenu isOpen={isMobileOpen} onClose={closeMobileMenu} />
      </div>
    </header>
  );
}
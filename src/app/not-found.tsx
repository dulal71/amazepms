"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineHome, HiOutlineLifebuoy } from "react-icons/hi2";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-slate-950 px-6">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-blue-600/25 blur-[110px]" />
        <div className="absolute bottom-0 -right-24 h-96 w-96 rounded-full bg-purple-600/20 blur-[110px]" />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        aria-labelledby="not-found-heading"
        className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-12 text-center backdrop-blur-xl"
      >
        <p className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-7xl font-bold text-transparent">
          404
        </p>

        <h1 id="not-found-heading" className="mt-4 text-2xl font-bold text-white">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or may have
          been moved.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            aria-label="Return to the AmazePMS homepage"
          >
            <HiOutlineHome className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            aria-label="Contact AmazePMS support"
          >
            <HiOutlineLifebuoy className="h-4 w-4" aria-hidden="true" />
            Contact Support
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
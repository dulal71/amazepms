"use client";

import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function CtaBanner() {
  return (
    <section
      className="relative w-full overflow-hidden px-6 py-20 sm:py-28 lg:px-10 lg:py-36"
      style={{ background: "#0B1220" }}
      aria-label="Call to action"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-purple-500/8 blur-3xl" />
        <div className="absolute left-1/3 top-2/3 h-64 w-64 rounded-full bg-cyan-500/[0.06] blur-3xl" />
        <div className="absolute left-1/4 top-1/4 h-1.5 w-1.5 rounded-full bg-blue-400/30" />
        <div className="absolute right-1/3 top-1/3 h-1 w-1 rounded-full bg-purple-400/20" />
        <div className="absolute left-2/3 bottom-1/4 h-2 w-2 rounded-full bg-cyan-400/20" />
        <div className="absolute left-1/2 top-1/4 h-0.5 w-32 rotate-45 bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
        <div className="absolute right-1/4 top-3/4 h-0.5 w-24 -rotate-12 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-blue-500/[0.06] via-white/[0.03] to-purple-500/[0.04] px-8 py-14 text-center backdrop-blur-2xl sm:px-16 sm:py-20"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-blue-500/15 blur-2xl" />
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-purple-500/15 blur-2xl" />
            <div className="absolute left-1/2 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl"
            >
              Ready to Maximize Your Property Investment?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              Partner with our experienced property management team and enjoy
              stress-free ownership while we handle everything for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.a
                href="/get-started"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 40px rgba(37,99,235,0.3)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-all hover:shadow-blue-700/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
                aria-label="Get free consultation"
              >
                Get Free Consultation
                <HiOutlineArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
                aria-label="Contact our team"
              >
                Contact Our Team
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

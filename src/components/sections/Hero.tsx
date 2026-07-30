"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  HiOutlineStar,
  HiOutlineCheckBadge,
  HiOutlineBuildingOffice2,
  HiOutlineUsers,
  HiOutlineArrowTrendingUp,
  HiOutlineClock,
  HiOutlineArrowRight,
  HiOutlinePlayCircle,
  HiOutlineChevronDown,
} from "react-icons/hi2";
import FloatingParticles from "../ui/FloatingParticles";

const HERO_IMAGES = [
  "/hero-images/banner-image-1.jfif",
  "/hero-images/banner-image-2.jfif",
  "/hero-images/banner-image-3.jfif",
];

const STATS_DATA = [
  { icon: <HiOutlineBuildingOffice2 className="h-5 w-5" />, value: "2500+", label: "Properties" },
  { icon: <HiOutlineUsers className="h-5 w-5" />, value: "1200+", label: "Happy Clients" },
  { icon: <HiOutlineCheckBadge className="h-5 w-5" />, value: "99%", label: "Rent Collection" },
  { icon: <HiOutlineClock className="h-5 w-5" />, value: "24/7", label: "Maintenance Support" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function BackgroundSlider() {
  const [loaded, setLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let mounted = true;
    Promise.all(
      HERO_IMAGES.map(
        (src) =>
          new Promise((resolve) => {
            const img = new window.Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = src;
          }),
      ),
    ).then(() => {
      if (mounted) setLoaded(true);
    });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [loaded]);

  return (
    <div className="absolute inset-0 w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full"
        >
          <Image
            src={HERO_IMAGES[currentIndex]}
            alt=""
            fill
            className="scale-105 object-cover"
            priority={currentIndex === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Multi-layer overlays */}
      <div className="absolute inset-0 w-full bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/80" />
      <div className="absolute inset-0 w-full bg-[radial-gradient(ellipse_at_center_30%,rgba(37,99,235,0.15),transparent_70%)]" />
      <div className="absolute inset-0 w-full bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.4),transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 w-full bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.15),transparent_60%)]" aria-hidden="true" />

      {/* Slider indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2.5 md:flex" role="tablist" aria-label="Image slides">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 ${
              i === currentIndex
                ? "w-8 bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                : "w-2 bg-white/30 hover:bg-white/50"
            } h-2 cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
}

function ScrollIndicator() {
  const scrollToNext = useCallback(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) return;
    const next = hero.nextElementSibling;
    if (next) next.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <motion.button
      onClick={scrollToNext}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-white/80 md:flex"
      aria-label="Scroll to next section"
    >
      <span className="text-[10px] font-medium uppercase tracking-widest">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <HiOutlineChevronDown className="h-4 w-4" />
      </motion.div>
    </motion.button>
  );
}



function StatsCard({
  data,
  index,
}: {
  data: (typeof STATS_DATA)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.8 + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -6,
        scale: 1.03,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] px-5 py-4 backdrop-blur-2xl transition-shadow duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
      </div>
      <div className="relative z-10 flex items-center gap-3">
        <motion.div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-8deg] group-hover:text-blue-300"
        >
          {data.icon}
        </motion.div>
        <div>
          <p className="text-lg font-bold leading-none text-white">
            {data.value}
          </p>
          <p className="mt-0.5 text-xs text-slate-400">{data.label}</p>
        </div>
      </div>
    </motion.div>
  );
}

function StatsBar() {
  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-3 md:grid-cols-4">
      {STATS_DATA.map((stat, i) => (
        <StatsCard key={stat.label} data={stat} index={i} />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative flex w-full min-h-screen flex-col overflow-hidden"
      aria-label="Hero section"
    >
      <BackgroundSlider />
      <FloatingParticles />

     
      <div className="relative z-10 flex flex-1 flex-col pt-28">
        <div className="flex flex-1 items-center justify-center">
          <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center text-center"
            >
              <motion.div
                variants={fadeUpVariants}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm"
              >
                <HiOutlineStar className="h-3.5 w-3.5 text-amber-400" />
                Trusted by 2,500+ Property Owners
              </motion.div>

              <motion.h1
                variants={fadeUpVariants}
                className="text-balance text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Stress-Free Property Management{" "}
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  That Maximizes
                </span>{" "}
                Your Investment
              </motion.h1>

              <motion.p
                variants={fadeUpVariants}
                className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-slate-400 sm:text-lg"
              >
                From tenant screening and rent collection to maintenance and
                financial reporting, we simplify every aspect of property
                management.
              </motion.p>

              <motion.div
                variants={fadeUpVariants}
                className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
              >
                <motion.a
                  href="/get-started"
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 0 50px rgba(37,99,235,0.4), 0 8px 32px rgba(37,99,235,0.2)",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-all hover:shadow-blue-700/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  aria-label="Get free consultation"
                >
                  Get Free Consultation
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <HiOutlineArrowRight
                      className="h-4 w-4 transition-transform"
                      aria-hidden="true"
                    />
                  </motion.span>
                </motion.a>

                <motion.a
                  href="/services"
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                    borderColor: "rgba(255,255,255,0.3)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  aria-label="Explore our services"
                >
                  <HiOutlinePlayCircle className="h-4 w-4" aria-hidden="true" />
                  Explore Services
                </motion.a>
              </motion.div>

              <motion.div
                variants={fadeUpVariants}
                className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
              >
                <div className="flex items-center gap-1.5 text-sm text-slate-300">
                  <HiOutlineStar className="h-4 w-4 text-amber-400" aria-hidden="true" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-slate-500">Rating</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-slate-300">
                  <HiOutlineBuildingOffice2 className="h-4 w-4 text-blue-400" aria-hidden="true" />
                  <span className="font-semibold">2500+</span>
                  <span className="text-slate-500">Properties Managed</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-slate-300">
                  <HiOutlineArrowTrendingUp className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  <span className="font-semibold">98%</span>
                  <span className="text-slate-500">Occupancy Rate</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="pb-8 pt-8 lg:pb-12">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <StatsBar />
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
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
} from "react-icons/hi2";

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
    }, 5000);
    return () => clearInterval(timer);
  }, [loaded]);

  return (
    <div className="absolute inset-0 w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full"
        >
          <Image
            src={HERO_IMAGES[currentIndex]}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 w-full bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/80" />
      <div className="absolute inset-0 w-full bg-[radial-gradient(ellipse_at_center_35%,rgba(37,99,235,0.12),transparent_70%)]" />
    </div>
  );
}


function StatsCard({ data, index }: { data: (typeof STATS_DATA)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-4 backdrop-blur-2xl transition-all hover:border-blue-500/30 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-cyan-400">
        {data.icon}
      </div>
      <div>
        <p className="text-lg font-bold leading-none text-white">{data.value}</p>
        <p className="mt-0.5 text-xs text-slate-400">{data.label}</p>
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
      className="relative flex w-full min-h-screen flex-col overflow-hidden"
      aria-label="Hero section"
    >
      <BackgroundSlider />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full border border-blue-500/5" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full border border-purple-500/5" />
        <div className="absolute left-1/3 top-1/3 h-2 w-2 rounded-full bg-blue-400/20" />
        <div className="absolute right-1/4 top-1/2 h-1.5 w-1.5 rounded-full bg-purple-400/20" />
        <div className="absolute left-2/3 bottom-1/3 h-1 w-1 rounded-full bg-cyan-400/20" />
      </div>

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
                className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Stress-Free Property Management{" "}
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  That Maximizes
                </span>{" "}
                Your Investment
              </motion.h1>

              <motion.p
                variants={fadeUpVariants}
                className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
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
                    scale: 1.03,
                    boxShadow: "0 0 40px rgba(37,99,235,0.3)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-all hover:shadow-blue-700/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  aria-label="Get free consultation"
                >
                  Get Free Consultation
                  <HiOutlineArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </motion.a>

                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
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
    </section>
  );
}

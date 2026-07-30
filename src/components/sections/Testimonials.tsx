"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  HiOutlineStar,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineBuildingOffice2,
  HiOutlineUsers,
  HiOutlineCheckBadge,
} from "react-icons/hi2";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { TESTIMONIALS, type TestimonialData } from "@/data/testimonials";
import DecorativeGlows from "../ui/DecorativeGlows";
import FloatingParticles from "../ui/FloatingParticles";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideVariants: Variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
};

interface TrustStatData {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const TRUST_STATS: TrustStatData[] = [
  {
    icon: <HiOutlineStar className="h-5 w-5" />,
    value: 49,
    suffix: "/5",
    label: "Average Rating",
    prefix: "4.",
  },
  {
    icon: <HiOutlineBuildingOffice2 className="h-5 w-5" />,
    value: 2500,
    suffix: "+",
    label: "Properties Managed",
  },
  {
    icon: <HiOutlineUsers className="h-5 w-5" />,
    value: 1200,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: <HiOutlineCheckBadge className="h-5 w-5" />,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-white/10"}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  data,
}: {
  data: TestimonialData;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -6,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="group relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-xl transition-shadow duration-300 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.12)] sm:p-8"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <motion.div
          className="mb-4 text-blue-400/30 transition-all duration-300 group-hover:rotate-[-8deg] group-hover:text-blue-400/50"
          whileHover={{ rotate: -8 }}
        >
          <FaQuoteLeft className="h-8 w-8" />
        </motion.div>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-300 sm:text-base">
          &ldquo;{data.review}&rdquo;
        </p>

        <div className="mb-4">
          <StarRating rating={data.rating} />
        </div>

        <div className="flex items-center gap-4">
          <motion.div
            className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white/10 transition-all duration-300 group-hover:ring-blue-500/40"
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={data.avatar}
              alt={data.name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </motion.div>
          <div>
            <p className="text-sm font-semibold text-white">{data.name}</p>
            <p className="text-xs text-slate-400">{data.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function NavigationDots({
  total,
  current,
  onChange,
}: {
  total: number;
  current: number;
  onChange: (i: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2" role="tablist" aria-label="Testimonial slides">
      {Array.from({ length: total }).map((_, i) => (
        <motion.button
          key={i}
          onClick={() => onChange(i)}
          role="tab"
          aria-selected={i === current}
          aria-label={`Go to slide ${i + 1}`}
          className={`relative h-2 cursor-pointer rounded-full transition-all ${
            i === current ? "w-8 bg-blue-500" : "w-2 bg-white/20 hover:bg-white/40"
          }`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {i === current && (
            <motion.div
              layoutId="active-dot"
              className="absolute inset-0 rounded-full bg-blue-500"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}

function NavButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const Icon = direction === "prev" ? HiOutlineChevronLeft : HiOutlineChevronRight;

  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 30px rgba(37,99,235,0.2)",
      }}
      whileTap={{ scale: 0.9 }}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-colors hover:border-blue-500/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      aria-label={direction === "prev" ? "Previous testimonials" : "Next testimonials"}
    >
      <Icon className="h-5 w-5" />
    </motion.button>
  );
}

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

function TrustStats() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {TRUST_STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.5,
            delay: 0.3 + i * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{
            y: -4,
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-5 text-center backdrop-blur-2xl transition-shadow duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] sm:px-6 sm:py-6"
        >
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 text-blue-400">
            {stat.icon}
          </div>
          <p className="text-2xl font-bold text-white sm:text-3xl">
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
            />
          </p>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalPages = Math.ceil(TESTIMONIALS.length / perPage);
  const start = currentPage * perPage;
  const visibleTestimonials = TESTIMONIALS.slice(start, start + perPage);

  const goToPage = useCallback(
    (page: number) => {
      setDirection(page > currentPage ? 1 : -1);
      setCurrentPage(page);
    },
    [currentPage],
  );

  const goNext = useCallback(() => {
    goToPage((currentPage + 1) % totalPages);
  }, [currentPage, totalPages, goToPage]);

  const goPrev = useCallback(() => {
    goToPage((currentPage - 1 + totalPages) % totalPages);
  }, [currentPage, totalPages, goToPage]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newPerPage = 3;
      if (width < 768) newPerPage = 1;
      else if (width < 1024) newPerPage = 2;
      setPerPage(newPerPage);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(goNext, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, goNext]);

  useEffect(() => {
    if (currentPage >= totalPages) setCurrentPage(0);
  }, [currentPage, totalPages]);

  return (
    <section
      className="relative w-full overflow-hidden px-6 py-20 sm:py-28 lg:px-10 lg:py-36"
      style={{ background: "#0B1220" }}
      aria-label="Client testimonials"
    >
      <DecorativeGlows />
      <FloatingParticles />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 backdrop-blur-sm"
          >
            Client Testimonials
          </motion.span>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Trusted by Property Owners Across the Region
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Discover why property owners and investors choose our management
            services to maximize returns, reduce stress, and provide exceptional
            experiences for their tenants.
          </motion.p>
        </motion.div>

        <div
          className="relative mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {visibleTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} data={testimonial} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <NavButton direction="prev" onClick={goPrev} />
          <NavigationDots
            total={totalPages}
            current={currentPage}
            onChange={goToPage}
          />
          <NavButton direction="next" onClick={goNext} />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="mt-20"
        >
          <TrustStats />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  FaUsers,
  FaMoneyBillWave,
  FaTools,
  FaChartLine,
  FaStar,
} from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi2";

interface FeatureCardData {
  icon: React.ReactNode;
  title: string;
  description: string;
  floatY: number[];
  delay: number;
}

const FEATURE_CARDS: FeatureCardData[] = [
  {
    icon: <FaUsers />,
    title: "Tenant Screening",
    description:
      "Carefully verified tenants through comprehensive background and credit checks.",
    floatY: [-8, 8],
    delay: 0,
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Rent Collection",
    description:
      "Secure online rent collection with automated payment tracking.",
    floatY: [8, -8],
    delay: 0.3,
  },
  {
    icon: <FaTools />,
    title: "24/7 Maintenance",
    description:
      "Fast maintenance coordination with trusted local professionals.",
    floatY: [-6, 10],
    delay: 0.6,
  },
  {
    icon: <FaChartLine />,
    title: "Financial Reporting",
    description:
      "Monthly financial reports with complete transparency and real-time insights.",
    floatY: [10, -6],
    delay: 0.9,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

function FeatureCard({ data, index }: { data: FeatureCardData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: data.floatY }}
        transition={{
          y: {
            duration: 4 + index * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: data.delay,
          },
        }}
        whileHover={{
          scale: 1.05,
          y: -12,
          transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
        }}
        className="group rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-2xl transition-shadow duration-300 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.12)]"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-8deg] group-hover:text-blue-300">
          <span className="text-base">{data.icon}</span>
        </div>
        <h3 className="mb-2 text-base font-semibold text-white">{data.title}</h3>
        <p className="text-sm leading-relaxed text-slate-400">
          {data.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/4 top-1/4 h-1.5 w-1.5 rounded-full bg-blue-400/30" />
      <div className="absolute right-1/3 top-1/3 h-1 w-1 rounded-full bg-purple-400/20" />
      <div className="absolute left-2/3 bottom-1/4 h-2 w-2 rounded-full bg-cyan-400/20" />
      <div className="absolute right-1/4 top-2/3 h-1 w-1 rounded-full bg-blue-400/25" />
      <div className="absolute left-1/5 bottom-1/3 h-1.5 w-1.5 rounded-full bg-blue-500/15" />
      <div className="absolute right-2/5 top-1/5 h-1 w-1 rounded-full bg-purple-500/20" />
    </div>
  );
}

function DecorativeGlows() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
      <div className="absolute left-1/3 top-2/3 h-64 w-64 rounded-full bg-cyan-500/[0.04] blur-3xl" />
      <div className="absolute left-1/2 top-1/4 h-0.5 w-32 rotate-45 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      <div className="absolute right-1/4 top-3/4 h-0.5 w-24 -rotate-12 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
    </div>
  );
}

function BottomCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] px-8 py-10 text-center backdrop-blur-2xl sm:px-12 sm:py-12"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-purple-500/10 blur-2xl" />
      </div>

      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Your Property Deserves Professional Management
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
          Partner with our experienced team to reduce vacancies, increase rental
          income, and enjoy stress-free property ownership.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
            href="/about"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
            aria-label="Learn more about us"
          >
            Learn More
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      className="relative w-full overflow-hidden px-6 py-20 sm:py-28 lg:px-10 lg:py-36"
      style={{ background: "#0B1220" }}
      aria-label="About our company"
    >
      <DecorativeGlows />
      <FloatingParticles />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-16">
          {/* Left Column – Image */}
          <motion.div
            variants={slideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative"
          >
            <div className="absolute -inset-4" aria-hidden="true">
              <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] shadow-2xl shadow-blue-900/20">
              <Image
                src="/hero-images/banner-image-1.jfif"
                alt="Professional property management team"
                width={800}
                height={1000}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 ring-inset" />
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-4 top-4 sm:left-6 sm:top-6"
            >
              <motion.div
                animate={{ y: [-6, 6] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
                }}
                className="rounded-xl border border-white/10 bg-white/[0.08] px-4 py-2.5 backdrop-blur-2xl"
              >
                <div className="flex items-center gap-2">
                  <FaStar className="h-4 w-4 text-amber-400" />
                  <span className="text-sm font-semibold text-white">
                    15+ Years Experience
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6"
            >
              <motion.div
                animate={{ y: [8, -8] }}
                transition={{
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
                }}
                className="rounded-xl border border-white/10 bg-white/[0.08] px-4 py-2.5 backdrop-blur-2xl"
              >
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">2500+</span>
                <span className="text-xs text-slate-300">Properties Managed</span>
              </div>
            </motion.div>
          </motion.div>
          </motion.div>

          {/* Right Column – Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col"
          >
            <motion.span
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 backdrop-blur-sm"
            >
              About Our Company
            </motion.span>

            <motion.h2
              variants={fadeUpVariants}
              className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Building Stronger Investments Through Professional Property
              Management
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              We help property owners maximize returns with comprehensive
              property management solutions. From tenant placement and rent
              collection to maintenance coordination and financial reporting,
              our experienced team delivers reliable service, transparency, and
              peace of mind every step of the way.
            </motion.p>

            {/* Feature Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              {FEATURE_CARDS.map((card, i) => (
                <FeatureCard key={card.title} data={card} index={i} />
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <div className="mt-10">
              <BottomCta />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

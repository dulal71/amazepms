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
import DecorativeGlows from "../ui/DecorativeGlows";
import FloatingParticles from "../ui/FloatingParticles";

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

            
          </motion.div>
        </div>
      </div>
    </section>
  );
}

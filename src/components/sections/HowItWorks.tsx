"use client";

import { motion, type Variants } from "framer-motion";
import {
  FaPhoneVolume,
  FaClipboardCheck,
  FaUsers,
  FaBuilding,
} from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi2";
import DecorativeGlows from "../ui/DecorativeGlows";
import FloatingParticles from "../ui/FloatingParticles";

interface StepData {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const STEPS: StepData[] = [
  {
    number: "01",
    icon: <FaPhoneVolume />,
    title: "Free Consultation",
    description:
      "Tell us about your property and your goals. Our experts will understand your needs and recommend the best management strategy.",
  },
  {
    number: "02",
    icon: <FaClipboardCheck />,
    title: "Property Evaluation",
    description:
      "We inspect your property, analyze the local market, and determine the best rental strategy to maximize returns.",
  },
  {
    number: "03",
    icon: <FaUsers />,
    title: "Tenant Placement",
    description:
      "We market your property, screen qualified applicants, and place reliable tenants through a comprehensive verification process.",
  },
  {
    number: "04",
    icon: <FaBuilding />,
    title: "Ongoing Management",
    description:
      "From rent collection and maintenance coordination to financial reporting, we handle everything while you enjoy passive income.",
  },
];

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

function DesktopTimelineLine() {
  return (
    <div
      className="pointer-events-none absolute top-[28px] h-[2px]"
      style={{ left: "calc(12.5% + 28px)", right: "calc(12.5% + 28px)" }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-blue-500/40 to-blue-500/10" />
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 100%" }}
      />
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.8)]"
          initial={{ left: "0%" }}
          animate={{ left: ["0%", "100%", "0%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.33,
          }}
        />
      ))}
    </div>
  );
}

function MobileTimelineLine() {
  return (
    <div
      className="pointer-events-none absolute left-7 top-0 bottom-0 w-[2px]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-500/10 via-blue-500/40 to-blue-500/10" />
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-blue-400/60 to-transparent"
        animate={{ backgroundPosition: ["50% 0%", "50% 100%", "50% 0%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "100% 200%" }}
      />
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.8)]"
          initial={{ top: "0%" }}
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.33,
          }}
        />
      ))}
    </div>
  );
}

function StepCard({ data, index }: { data: StepData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative mb-6">
        <div
          className="absolute inset-0 rounded-full bg-blue-500/25 blur-xl"
          aria-hidden="true"
        />
        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
          <span className="text-lg font-bold text-blue-400">{data.number}</span>
        </div>
      </div>

      <motion.div
        whileHover={{
          scale: 1.05,
          y: -8,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        className="group relative w-full rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-xl transition-shadow duration-300 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]"
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent" />
        </div>

        <div className="relative z-10">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-8deg] group-hover:text-blue-300">
            <span className="text-2xl">{data.icon}</span>
          </div>

          <h3 className="mb-3 text-lg font-semibold text-white">{data.title}</h3>

          <p className="text-sm leading-relaxed text-slate-400">
            {data.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MobileStep({ data, index }: { data: StepData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex gap-5"
    >
      <div className="flex flex-col items-center">
        <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
          <div
            className="absolute inset-0 rounded-full bg-blue-500/25 blur-xl"
            aria-hidden="true"
          />
          <span className="relative z-10 text-lg font-bold text-blue-400">
            {data.number}
          </span>
        </div>
      </div>

      <motion.div
        whileHover={{
          scale: 1.03,
          y: -4,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        className="group flex-1 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5 backdrop-blur-xl transition-shadow duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.12)]"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-8deg] group-hover:text-blue-300">
          <span className="text-lg">{data.icon}</span>
        </div>
        <h3 className="mb-2 text-base font-semibold text-white">{data.title}</h3>
        <p className="text-sm leading-relaxed text-slate-400">
          {data.description}
        </p>
      </motion.div>
    </motion.div>
  );
}



export default function HowItWorks() {
  return (
    <section
      className="relative w-full overflow-hidden px-6 py-20 sm:py-28 lg:px-10 lg:py-36"
      style={{ background: "#0B1220" }}
      aria-label="How it works"
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
            How It Works
          </motion.span>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Simple Process. Exceptional Results.
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Our streamlined property management process makes it easy to protect
            your investment, attract quality tenants, and maximize your rental
            income with complete peace of mind.
          </motion.p>
        </motion.div>

        <div className="relative mt-20 hidden lg:block">
          <DesktopTimelineLine />

          <div className="grid grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <StepCard key={step.number} data={step} index={i} />
            ))}
          </div>
        </div>

        <div className="relative mt-16 lg:hidden">
          <MobileTimelineLine />

          <div className="flex flex-col gap-10">
            {STEPS.map((step, i) => (
              <MobileStep key={step.number} data={step} index={i} />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import {
  FaAward,
  FaShieldAlt,
  FaUsers,
  FaHeadset,
  FaChartLine,
  FaFileInvoiceDollar,
  FaBuilding,
  FaSmile,
  FaCheckCircle,
  FaDollarSign,
  FaHome,
  FaStar,
  FaClock,
} from "react-icons/fa";

interface BenefitData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface MiniStatData {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

interface BottomStatData {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const BENEFITS: BenefitData[] = [
  {
    icon: <FaAward />,
    title: "15+ Years of Experience",
    description:
      "Trusted by property owners with years of successful management expertise.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted & Secure",
    description:
      "Reliable systems, transparent processes, and secure property management.",
  },
  {
    icon: <FaUsers />,
    title: "Dedicated Property Managers",
    description:
      "Experienced professionals focused on maximizing your property's value.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Customer Support",
    description:
      "Fast responses for owners and tenants whenever assistance is needed.",
  },
  {
    icon: <FaChartLine />,
    title: "98% Occupancy Rate",
    description:
      "Strategic marketing and tenant placement to reduce vacancy periods.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Transparent Financial Reporting",
    description:
      "Detailed reports that keep you informed about your investment performance.",
  },
];

const MINI_STATS: MiniStatData[] = [
  {
    icon: <FaBuilding />,
    value: "2500+",
    label: "Properties Managed",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: <FaSmile />,
    value: "1200+",
    label: "Happy Clients",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    icon: <FaDollarSign />,
    value: "$2.4M",
    label: "Rent Collected",
    color: "from-violet-500/20 to-violet-600/10",
  },
  {
    icon: <FaCheckCircle />,
    value: "98%",
    label: "Maintenance Completed",
    color: "from-cyan-500/20 to-cyan-600/10",
  },
];

const BOTTOM_STATS: BottomStatData[] = [
  { icon: <FaBuilding />, value: "2500+", label: "Properties" },
  { icon: <FaSmile />, value: "1200+", label: "Happy Clients" },
  { icon: <FaHome />, value: "98%", label: "Occupancy" },
  { icon: <FaClock />, value: "15+", label: "Years Experience" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

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

function BenefitCard({ data, index }: { data: BenefitData; index: number }) {
  return (
    <motion.div
      variants={fadeUpVariants}
      className="group relative flex gap-5"
    >
      {/* Connector line & dot */}
      <div className="flex flex-col items-center">
        <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 text-blue-400 ring-1 ring-white/10 backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:text-blue-300 group-hover:ring-blue-500/30">
          <span className="text-sm">{data.icon}</span>
        </div>
        {index < BENEFITS.length - 1 && (
          <div className="mt-1 h-full w-px bg-gradient-to-b from-blue-500/30 via-blue-500/10 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="mb-8 flex-1 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 group-hover:border-blue-500/20 group-hover:bg-white/[0.05] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.08)]">
        <h3 className="text-base font-semibold text-white">{data.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
          {data.description}
        </p>
      </div>
    </motion.div>
  );
}

function DashboardCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-2xl"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 text-blue-400">
          <FaChartLine className="text-base" />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
            Performance Overview
          </p>
          <p className="text-sm font-semibold text-white">Portfolio Summary</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Occupancy Rate</p>
          <p className="mt-1 text-2xl font-bold text-emerald-400">98%</p>
        </div>
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Monthly Revenue</p>
          <p className="mt-1 text-2xl font-bold text-white">$847K</p>
        </div>
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Maintenance</p>
          <p className="mt-1 text-2xl font-bold text-amber-400">12 Open</p>
        </div>
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Tenant Satisfaction</p>
          <p className="mt-1 text-2xl font-bold text-blue-400">4.9/5</p>
        </div>
      </div>
    </motion.div>
  );
}

function MiniStatCard({ data, index }: { data: MiniStatData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          y: { duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 },
        }}
        whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }}
        className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.04] p-4 backdrop-blur-2xl transition-shadow duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]"
      >
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${data.color} text-blue-400`}
        >
          {data.icon}
        </div>
        <div>
          <p className="text-base font-bold text-white">{data.value}</p>
          <p className="text-xs text-slate-400">{data.label}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function BottomStatCard({ data, index }: { data: BottomStatData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.6 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
      className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-6 py-5 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-cyan-400">
        {data.icon}
      </div>
      <div>
        <p className="text-xl font-bold text-white">{data.value}</p>
        <p className="text-sm text-slate-400">{data.label}</p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      className="relative w-full overflow-hidden px-6 py-20 sm:py-28 lg:px-10 lg:py-36"
      style={{ background: "#0B1220" }}
      aria-label="Why choose us"
    >
      <DecorativeGlows />
      <FloatingParticles />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
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
            Why Choose Us
          </motion.span>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Why Thousands of Property Owners Trust Our Management Services
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            We combine industry expertise, innovative technology, and
            exceptional customer service to help property owners maximize
            returns while ensuring tenants enjoy a seamless living experience.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-16 grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left – Timeline Benefits */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={containerVariants}
          >
            {BENEFITS.map((benefit, i) => (
              <BenefitCard key={benefit.title} data={benefit} index={i} />
            ))}
          </motion.div>

          {/* Right – Dashboard */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-col gap-5"
          >
            <DashboardCard />

            <div className="grid grid-cols-2 gap-4">
              {MINI_STATS.map((stat, i) => (
                <MiniStatCard key={stat.label} data={stat} index={i} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Statistics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {BOTTOM_STATS.map((stat, i) => (
            <BottomStatCard key={stat.label} data={stat} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

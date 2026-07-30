"use client";

import { motion, type Variants } from "framer-motion";
import {
  FaBuilding,
  FaUserCheck,
  FaMoneyBillWave,
  FaTools,
  FaFileInvoiceDollar,
  FaBullhorn,
  FaArrowRight,
} from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi2";

interface ServiceCardData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SERVICES: ServiceCardData[] = [
  {
    icon: <FaBuilding />,
    title: "Property Management",
    description:
      "Complete management solutions designed to protect and grow your real estate investment.",
  },
  {
    icon: <FaUserCheck />,
    title: "Tenant Screening",
    description:
      "Background checks, credit verification, and tenant qualification for reliable occupancy.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Rent Collection",
    description:
      "Automated online payments with secure processing and detailed financial tracking.",
  },
  {
    icon: <FaTools />,
    title: "Property Maintenance",
    description:
      "Fast maintenance coordination with trusted contractors available 24/7.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Financial Reporting",
    description:
      "Detailed monthly reports and transparent financial insights for every property owner.",
  },
  {
    icon: <FaBullhorn />,
    title: "Property Marketing",
    description:
      "Professional listings, digital marketing, and vacancy reduction strategies to attract quality tenants.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

function ServiceCard({ data, index }: { data: ServiceCardData; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.03,
        y: -10,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      }}
      className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 backdrop-blur-xl transition-shadow duration-300 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.12)]"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-8deg] group-hover:text-blue-300">
        <span className="text-xl">{data.icon}</span>
      </div>

      <h3 className="mb-3 text-lg font-semibold text-white">{data.title}</h3>

      <p className="mb-6 text-sm leading-relaxed text-slate-400">
        {data.description}
      </p>

      <motion.span
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors group-hover:text-blue-300"
      >
        Learn More
        <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
      </motion.span>
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
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] px-8 py-12 text-center backdrop-blur-2xl sm:px-16 sm:py-16"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-purple-500/10 blur-2xl" />
      </div>

      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Need Professional Property Management?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Let our experienced team handle every aspect of your property while
          you enjoy stress-free ownership and consistent returns.
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
            href="/services"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
            aria-label="View all services"
          >
            View All Services
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      className="relative w-full overflow-hidden px-6 py-20 sm:py-28 lg:px-10 lg:py-36"
      style={{ background: "#0B1220" }}
      aria-label="Our services"
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
            Our Services
          </motion.span>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Complete Property Management Solutions
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            From tenant placement to financial reporting, we provide end-to-end
            property management services that help property owners maximize
            returns while delivering exceptional experiences for tenants.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} data={service} index={i} />
          ))}
        </motion.div>

        <div className="mt-20">
          <BottomCta />
        </div>
      </div>
    </section>
  );
}

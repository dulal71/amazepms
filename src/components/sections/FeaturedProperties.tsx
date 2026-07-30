"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  HiOutlineHeart,
  HiOutlineMapPin,
  HiOutlineArrowRight,
} from "react-icons/hi2";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import DecorativeGlows from "../ui/DecorativeGlows";
import FloatingParticles from "../ui/FloatingParticles";
import { PROPERTIES } from "@/data/properties";

interface PropertyData {
  id: string;
  image: string;
  status: string;
  type: string;
  title: string;
  address: string;
  rent: number;
  beds: number;
  baths: number;
  area: number;
}


const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const rentFormat = (rent: number) =>
  `$${rent.toLocaleString("en-US")}/mo`;

function PropertyCard({ data, index }: { data: PropertyData; index: number }) {
  const [favorited, setFavorited] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl transition-shadow duration-300 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.12)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 flex gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${
              data.status === "For Rent"
                ? "bg-blue-500/80 text-white"
                : "bg-emerald-500/80 text-white"
            }`}
          >
            {data.status}
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {data.type}
          </span>
        </div>

        <motion.button
          onClick={() => setFavorited(!favorited)}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm transition-colors hover:bg-black/60"
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        >
          <HiOutlineHeart
            className={`h-5 w-5 transition-colors ${
              favorited ? "fill-red-500 text-red-500" : "text-white"
            }`}
          />
        </motion.button>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-lg font-semibold text-white drop-shadow-sm">
            {data.title}
          </h3>
          <div className="mt-1 flex items-center gap-1.5 text-sm text-slate-300">
            <HiOutlineMapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate drop-shadow-sm">{data.address}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06] p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <FaBed className="h-3.5 w-3.5 text-blue-400" />
              {data.beds} Beds
            </span>
            <span className="flex items-center gap-1.5">
              <FaBath className="h-3.5 w-3.5 text-blue-400" />
              {data.baths} Baths
            </span>
            <span className="flex items-center gap-1.5">
              <FaRulerCombined className="h-3.5 w-3.5 text-blue-400" />
              {data.area} sqft
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-white">
            {rentFormat(data.rent)}
          </p>

          <motion.a
            href={`/properties/${data.id}`}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
            aria-label={`View details for ${data.title}`}
          >
            View Details
            <HiOutlineArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </motion.a>
        </div>
      </div>
    </motion.div>
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
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-purple-500/10 blur-2xl" />
      </div>

      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Looking for the Perfect Property?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Our team is ready to help you find a professionally managed property
          that matches your lifestyle and investment goals.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.a
            href="/properties"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 40px rgba(37,99,235,0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-all hover:shadow-blue-700/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
            aria-label="Browse all properties"
          >
            Browse All Properties
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
            aria-label="Contact an expert"
          >
            Contact an Expert
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProperties() {
  return (
    <section
      className="relative w-full overflow-hidden px-6 py-20 sm:py-28 lg:px-10 lg:py-36"
      style={{ background: "#0B1220" }}
      aria-label="Featured properties"
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
            Featured Properties
          </motion.span>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Explore Our Premium Managed Properties
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Browse a curated selection of professionally managed residential and
            commercial properties designed to deliver exceptional living
            experiences and long-term investment value.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROPERTIES.map((property, i) => (
            <PropertyCard key={property.id} data={property} index={i} />
          ))}
        </motion.div>

        <div className="mt-20">
          <BottomCta />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import DecorativeGlows from "../ui/DecorativeGlows";
import FloatingParticles from "../ui/FloatingParticles";

interface ContactInfoData {
  icon: React.ReactNode;
  label: string;
  value: string;
  subvalue?: string;
}

const CONTACT_INFO: ContactInfoData[] = [
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "info@propertymanager.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Office",
    value: "245 Park Avenue, New York, NY",
  },
  {
    icon: <FaClock />,
    label: "Business Hours",
    value: "Monday \u2013 Friday",
    subvalue: "9:00 AM \u2013 6:00 PM",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

function ContactInfoCard({
  data,
  index,
}: {
  data: ContactInfoData;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUpVariants}
      whileHover={{
        y: -4,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-5 py-4 backdrop-blur-xl transition-shadow duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] sm:px-6 sm:py-5"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 text-blue-400">
        <span className="text-base">{data.icon}</span>
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
          {data.label}
        </p>
        <p className="mt-0.5 text-sm font-medium text-white">{data.value}</p>
        {data.subvalue && (
          <p className="text-sm text-slate-400">{data.subvalue}</p>
        )}
      </div>
    </motion.div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputClass =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 backdrop-blur-xl transition-all hover:border-white/20 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/30";

  const labelClass = "mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {[
        { label: "Full Name", name: "name", type: "text", placeholder: "John Doe" },
        { label: "Email Address", name: "email", type: "email", placeholder: "john@example.com" },
        { label: "Phone Number", name: "phone", type: "tel", placeholder: "+1 (555) 000-0000" },
      ].map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className={labelClass}>
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            value={formData[field.name as keyof typeof formData]}
            onChange={handleChange}
            placeholder={field.placeholder}
            className={inputClass}
            required
          />
        </div>
      ))}

      <div>
        <label htmlFor="propertyType" className={labelClass}>
          Property Type
        </label>
        <select
          id="propertyType"
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          className={`${inputClass} appearance-none`}
          required
        >
          <option value="" disabled className="bg-slate-900 text-white">
            Select property type
          </option>
          <option value="apartment" className="bg-slate-900 text-white">
            Apartment
          </option>
          <option value="house" className="bg-slate-900 text-white">
            House
          </option>
          <option value="villa" className="bg-slate-900 text-white">
            Villa
          </option>
          <option value="commercial" className="bg-slate-900 text-white">
            Commercial
          </option>
          <option value="portfolio" className="bg-slate-900 text-white">
            Portfolio
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your property..."
          rows={4}
          className={`${inputClass} min-h-[100px] resize-none`}
          required
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{
          scale: 1.03,
          boxShadow: "0 0 40px rgba(37,99,235,0.3)",
        }}
        whileTap={{ scale: 0.97 }}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-all hover:shadow-blue-700/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
      >
        Send Message
        <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </motion.button>
    </form>
  );
}

export default function Contact() {
  return (
    <section
      className="relative w-full overflow-hidden px-6 py-20 sm:py-28 lg:px-10 lg:py-36"
      style={{ background: "#0B1220" }}
      aria-label="Contact us"
    >
      <DecorativeGlows />
      <FloatingParticles />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
          >
            <motion.span
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 backdrop-blur-sm"
            >
              Contact Us
            </motion.span>

            <motion.h2
              variants={fadeUpVariants}
              className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Let&apos;s Discuss Your Property Management Needs
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              Whether you own one property or an entire portfolio, our team is
              here to help you maximize your investment.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="mt-10 space-y-4"
            >
              {CONTACT_INFO.map((info, i) => (
                <ContactInfoCard key={info.label} data={info} index={i} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-2xl sm:p-8"
          >
            <h3 className="mb-6 text-lg font-semibold text-white">
              Send Us a Message
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import AmazeLogo from "../ui/Logo";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi2";

interface FooterLink {
  label: string;
  href: string;
}

const QUICK_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Properties", href: "/properties" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS: FooterLink[] = [
  { label: "Property Management", href: "/services" },
  { label: "Tenant Screening", href: "/services" },
  { label: "Rent Collection", href: "/services" },
  { label: "Maintenance", href: "/services" },
  { label: "Financial Reporting", href: "/services" },
];

const COMPANY_LINKS: FooterLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const SOCIAL_ICONS = [
  { icon: <FaFacebookF />, label: "Facebook", href: "#" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", href: "#" },
  { icon: <FaInstagram />, label: "Instagram", href: "#" },
  { icon: <FaTwitter />, label: "X (Twitter)", href: "#" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

function FooterLinkColumn({
  title,
  links,
  index,
}: {
  title: string;
  links: FooterLink[];
  index: number;
}) {
  return (
    <motion.div variants={fadeUpVariants}>
      <h4 className="mb-4 text-sm font-semibold text-white">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <motion.div variants={fadeUpVariants}>
      <h4 className="mb-4 text-sm font-semibold text-white">
        Subscribe to Our Newsletter
      </h4>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
          aria-label="Email for newsletter"
          className="min-w-0 flex-1 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-slate-500 backdrop-blur-xl transition-all hover:border-white/20 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/30"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-4 text-white shadow-lg shadow-blue-900/40 transition-all hover:shadow-blue-700/50"
          aria-label="Subscribe"
        >
          <FaArrowRight className="h-4 w-4" />
        </motion.button>
      </form>
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden border-t border-white/[0.06] px-6 pb-6 pt-16 sm:pt-20 lg:px-10 lg:pt-24"
      style={{ background: "#0B1220" }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-purple-500/[0.03] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12"
        >
          <motion.div variants={fadeUpVariants}>
            <AmazeLogo size="sm" showSubtitle={false} />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Professional property management solutions designed to maximize
              investment returns while providing exceptional tenant experiences.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_ICONS.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 20px rgba(37,99,235,0.3)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm text-slate-400 backdrop-blur-sm transition-colors hover:border-blue-500/30 hover:text-blue-400"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <FooterLinkColumn title="Quick Links" links={QUICK_LINKS} index={0} />
          <FooterLinkColumn title="Services" links={SERVICE_LINKS} index={1} />
          <FooterLinkColumn title="Company" links={COMPANY_LINKS} index={2} />
          <NewsletterForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 text-center sm:flex-row sm:text-left"
        >
          <p className="text-xs text-slate-500">
            &copy; 2026 Property Manager. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs text-slate-500 transition-colors hover:text-blue-400"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

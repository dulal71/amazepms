"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import DecorativeGlows from "../ui/DecorativeGlows";
import FloatingParticles from "../ui/FloatingParticles";

interface FaqData {
  question: string;
  answer: string;
}

const FAQS: FaqData[] = [
  {
    question: "How do you screen tenants?",
    answer:
      "We perform background checks, credit verification, employment verification, rental history reviews, and identity validation before approving tenants.",
  },
  {
    question: "How is rent collected?",
    answer:
      "Rent is collected securely through our online payment system with automatic reminders and detailed reporting.",
  },
  {
    question: "Who handles maintenance requests?",
    answer:
      "Our maintenance team coordinates repairs with trusted licensed contractors and provides 24/7 emergency support.",
  },
  {
    question: "How often do owners receive reports?",
    answer:
      "Owners receive detailed monthly financial reports along with occupancy and maintenance updates.",
  },
  {
    question: "Can I access my property information online?",
    answer:
      "Yes. Property owners have access to an online dashboard with reports, documents, and payment history.",
  },
  {
    question: "Do you manage multiple properties?",
    answer:
      "Absolutely. We manage everything from single-family homes to large residential and commercial portfolios.",
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

function AccordionItem({
  data,
  index,
  isOpen,
  onClick,
}: {
  data: FaqData;
  index: number;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      variants={fadeUpVariants}
      className={`group rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-blue-500/30 bg-white/[0.06] shadow-[0_0_30px_rgba(37,99,235,0.08)]"
          : "border-white/[0.08] bg-white/[0.04] hover:border-white/20"
      } backdrop-blur-xl`}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-5 text-left sm:px-8"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="pr-4 text-sm font-medium text-white sm:text-base">
          {data.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
            isOpen
              ? "bg-blue-500/20 text-blue-400"
              : "bg-white/5 text-slate-400 group-hover:text-white"
          }`}
        >
          <FaChevronDown className="h-3.5 w-3.5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div
              id={`faq-answer-${index}`}
              className="border-t border-white/[0.06] px-6 pb-6 pt-4 sm:px-8 sm:pb-6"
            >
              <p className="text-sm leading-relaxed text-slate-400">
                {data.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative w-full overflow-hidden px-6 py-20 sm:py-28 lg:px-10 lg:py-36"
      style={{ background: "#0B1220" }}
      aria-label="Frequently asked questions"
    >
      <DecorativeGlows />
      <FloatingParticles />

      <div className="relative z-10 mx-auto max-w-3xl">
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
            FAQ
          </motion.span>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Find answers to the most common questions about our property
            management services.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
          className="mt-14 space-y-4"
        >
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              data={faq}
              index={i}
              isOpen={openIndex === i}
              onClick={() => toggle(i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client'
import { motion } from "framer-motion";
import { FaChartLine } from "react-icons/fa";

const DashboardCard = () => {
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
};

export default DashboardCard;
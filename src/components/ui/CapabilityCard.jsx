import { memo } from "react";
import { motion } from "framer-motion";
import { EASE } from "../../lib/Constants";

function CapabilityCard({ title, desc, inView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: EASE }}
      whileHover={{ y: -3, borderColor: "rgba(167,139,250,0.6)" }}
      className="p-4 rounded-xl border border-violet-500/20 bg-[#0a0e24] transition-colors"
    >
      <div className="flex items-center gap-2 mb-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
        <span className="text-white font-semibold text-sm md:text-base">{title}</span>
      </div>
      <p className="text-slate-400 text-xs md:text-sm leading-relaxed pl-3.5">{desc}</p>
    </motion.div>
  );
}

export default memo(CapabilityCard);

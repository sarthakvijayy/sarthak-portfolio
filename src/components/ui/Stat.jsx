import { memo } from "react";
import { motion } from "framer-motion";
import { EASE } from "../../lib/constants";

function Stat({ number, label, inView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      <div className="text-3xl md:text-6xl text-gradient font-bold">{number}</div>
      <div className="text-[10px] tracking-widest uppercase text-slate-400 mt-1 font-semibold">
        {label}
      </div>
    </motion.div>
  );
}

export default memo(Stat);
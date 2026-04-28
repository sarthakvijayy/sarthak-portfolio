import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2 } from "lucide-react";
import { SKILLS } from "../../lib/data";
import { EASE } from "../../lib/constants";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="px-5 md:px-10 py-20 md:py-32 border-t border-violet-500/15 bg-[#070a1a]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="text-[10px] tracking-[0.3em] uppercase text-violet-400 mb-4 font-bold">
            004 / Toolkit
          </div>
          <h2 className="text-4xl md:text-7xl leading-[0.9] font-light text-white">
            The <em className="text-gradient font-medium">tools</em>
            <br />I reach for.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.04, ease: EASE }}
              whileHover={{ y: -3 }}
              className="group p-4 md:p-5 rounded-xl border border-violet-500/20 bg-[#0a0e24] hover:border-violet-400/60 hover:bg-[#0e1330] transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-white text-sm md:text-base">{s.name}</span>
                <Code2
                  size={12}
                  className="text-violet-400/60 group-hover:text-violet-300 transition-colors"
                />
              </div>
              <div className="h-1.5 bg-violet-500/15 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${s.level}%` } : {}}
                  transition={{ duration: 1.4, delay: i * 0.04 + 0.3, ease: EASE }}
                  className="h-full"
                  style={{ background: "linear-gradient(90deg, #6d28d9, #a78bfa, #c084fc)" }}
                />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[9px] tracking-[0.2em] uppercase text-violet-300/80 font-bold">
                  {s.cat}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">{s.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

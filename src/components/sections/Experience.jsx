import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { JOBS } from "../../lib/data";
import { EASE } from "../../lib/constants";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="work"
      ref={ref}
      className="px-5 md:px-10 py-20 md:py-32 border-t border-violet-500/15 bg-[#04060f]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 md:mb-20">
          <div className="text-[10px] tracking-[0.3em] uppercase text-violet-400 mb-4 font-bold">
            002 / Work
          </div>
          <h2 className="text-4xl md:text-7xl leading-[0.9] font-light text-white">
            Where I&apos;ve <em className="text-gradient font-medium">shipped.</em>
          </h2>
        </div>

        <div className="space-y-0">
          {JOBS.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: EASE }}
              className="group relative grid md:grid-cols-12 gap-4 md:gap-6 py-8 md:py-12 border-t border-violet-500/15 hover:bg-violet-500/[0.05] transition-colors px-2 md:px-4 -mx-2 md:-mx-4 rounded-lg"
            >
              <div className="md:col-span-3 text-xs text-violet-300 font-semibold">
                {job.period}
              </div>
              <div className="md:col-span-6">
                <h3 className="text-2xl md:text-4xl mb-1 font-semibold text-white">{job.role}</h3>
                <div className="text-violet-300 mb-5 text-sm font-medium">@ {job.company}</div>
                <ul className="space-y-2.5 text-slate-300 leading-relaxed font-normal text-sm md:text-base">
                  {job.points.map((p, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.15 + j * 0.08 + 0.3,
                        ease: EASE,
                      }}
                      className="flex gap-3"
                    >
                      <span className="text-violet-400 mt-1 shrink-0 font-bold">→</span>
                      <span>{p}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-3 flex flex-wrap gap-2 md:justify-end content-start">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/5 text-[10px] tracking-widest uppercase text-violet-200 group-hover:border-violet-400/70 group-hover:bg-violet-500/15 transition-colors font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ArrowUpRight
                size={20}
                className="hidden md:block absolute top-12 right-4 text-slate-500 group-hover:text-violet-300 group-hover:rotate-45 transition-all duration-300"
              />
            </motion.div>
          ))}
          <div className="border-t border-violet-500/15" />
        </div>
      </div>
    </section>
  );
}

import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Smartphone, Database, Zap, Globe } from "lucide-react";
import { EASE } from "../../lib/constants";

// Map iconName string from data to actual icon component
const ICON_MAP = { Smartphone, Database, Zap, Globe };

function ProjectCard({ project, index, onHover }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = ICON_MAP[project.iconName] || Smartphone;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: EASE }}
      whileHover={{ y: -6 }}
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
      className="group relative rounded-2xl border border-violet-500/20 p-6 md:p-8 overflow-hidden bg-[#0a0e24] hover:border-violet-400/60 hover:bg-[#0e1330] transition-colors duration-500"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(139,92,246,0.18), transparent 60%)",
        }}
      />

      <div className="relative">
        <div className="flex items-start justify-between mb-10 md:mb-14">
          <span className="text-xs text-violet-300 font-bold tracking-wider">/ {project.no}</span>
          <motion.div
            whileHover={{ scale: 1.15, rotate: 12 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="w-11 h-11 rounded-full border border-violet-500/30 flex items-center justify-center group-hover:border-violet-400 transition-colors duration-500"
            style={{
              background: "linear-gradient(135deg, rgba(139,92,246,0.18), rgba(109,40,217,0.05))",
            }}
          >
            <Icon
              size={18}
              className="text-violet-300 group-hover:text-violet-200 transition-colors"
            />
          </motion.div>
        </div>

        <div className="text-[10px] tracking-[0.25em] uppercase text-violet-400 mb-2 font-bold">
          {project.type}
        </div>
        <h3 className="text-2xl md:text-5xl mb-4 font-semibold text-white group-hover:text-violet-200 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-300 leading-relaxed mb-6 text-sm md:text-base font-normal">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 rounded-md bg-violet-500/15 border border-violet-500/20 text-[10px] tracking-wider text-violet-100 font-semibold"
            >
              {s}
            </span>
          ))}
        </div>

        {project.links?.length > 0 && (
          <div className="flex flex-col gap-2 pt-4 border-t border-violet-500/15">
            <div className="text-[9px] tracking-[0.25em] uppercase text-violet-400/80 font-bold mb-1">
              {project.links.length > 1 ? "Live links" : "Live"}
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {project.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-violet-300 hover:text-violet-100 hover:underline font-semibold"
                >
                  {l.label} <ExternalLink size={11} />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default memo(ProjectCard);

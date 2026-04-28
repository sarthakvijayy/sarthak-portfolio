import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SplitText from "../ui/SplitText";
import { setCursorHover } from "../Cursor";

/**
 * Hero — owns its own scroll subscription via useScroll(target).
 * Parallax fade is scoped to this section, not global.
 */
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center px-5 md:px-10 pt-32 pb-20 overflow-hidden bg-[#04060f] gpu-layer"
    >
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(109,40,217,0.18), transparent 55%), radial-gradient(ellipse at bottom left, rgba(30,27,75,0.35), transparent 55%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(167,139,250,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 md:right-10 w-56 md:w-80 h-56 md:h-80 rounded-full pointer-events-none"
        style={{ background: "rgba(139,92,246,0.12)", filter: "blur(80px)" }}
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-0 md:left-10 w-64 md:w-96 h-64 md:h-96 rounded-full pointer-events-none"
        style={{ background: "rgba(79,70,229,0.10)", filter: "blur(90px)" }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative max-w-[1400px] mx-auto w-full z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8 text-xs tracking-[0.3em] uppercase text-violet-300 font-semibold"
        >
          <span className="w-2 h-2 rounded-full bg-violet-400 pulse-dot shadow-[0_0_12px_rgba(167,139,250,0.9)]" />
          <span className="hidden sm:inline">
            Available for work · Jaipur · Gurgaon · Noida · Delhi NCR
          </span>
          <span className="sm:hidden">Available · Jaipur / NCR</span>
        </motion.div>

        <h1 className="leading-[1.1] md:leading-[0.9] tracking-tight font-bold text-white">
          <SplitText text="Sarthak" delay={0.2} />
          <br />
          <span className="shimmer-text italic font-medium">
            <SplitText text="Vijay." delay={0.5} />
          </span>
        </h1>

        <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-6 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="md:col-span-5"
          >
            <p className="text-slate-200 text-base md:text-lg leading-relaxed font-normal">
              I build{" "}
              <span className="text-violet-300 font-semibold">high-performance mobile</span> &amp;
              web applications. React Native specialist with a year of crafting interfaces that
              don&apos;t just work — they{" "}
              <em className="text-white font-semibold">feel</em> right.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            whileHover={{ y: -4, borderColor: "rgba(167,139,250,0.5)" }}
            className="md:col-span-4 md:col-start-9 flex flex-col gap-2 p-5 rounded-xl border border-violet-500/20 bg-[#0a0e24]/70 backdrop-blur-sm transition-colors"
          >
            <div className="text-[10px] tracking-[0.25em] uppercase text-violet-300 font-semibold">
              Currently
            </div>
            <div className="text-white font-medium">
              Webflow Developer at <span className="text-violet-300">Dashboard Doctor</span>
            </div>
            <div className="text-xs text-slate-400">2025 → present</div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          onMouseEnter={() => setCursorHover(true)}
          onMouseLeave={() => setCursorHover(false)}
          className="hidden md:flex absolute bottom-0 right-4 flex-col items-center gap-2 text-slate-400 hover:text-violet-300 transition-colors"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase rotate-90 origin-bottom-right mb-8 font-semibold">
            scroll
          </span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}

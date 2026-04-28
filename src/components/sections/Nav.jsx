import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "../ui/Magnetic";
import { EASE, NAV_LINKS, SECTION_IDS } from "../../lib/constants";

/**
 * Top navigation. Owns its own active-section state — uses IntersectionObserver
 * (not scroll listener) for far better performance on long scrolls.
 */
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Use IntersectionObserver instead of a scroll listener:
  // it only fires when section visibility changes, not on every scroll tick.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="fixed top-0 left-0 right-0 z-[120] px-5 md:px-10 py-4 backdrop-blur-xl bg-[#04060f]/85 border-b border-violet-500/15"
    >
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        <a href="#home" className="flex items-center gap-2.5 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-500/30"
            style={{ background: "linear-gradient(135deg, #6d28d9, #a78bfa)" }}
          >
            S
          </motion.div>
          <span className="text-xs tracking-[0.25em] uppercase font-semibold text-white">
            Sarthak Vijay
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="relative text-xs tracking-widest uppercase font-medium text-slate-300 hover:text-violet-300 transition-colors"
            >
              {l.label}
              {active === l.id && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute -bottom-1.5 left-0 right-0 h-[2px]"
                  style={{ background: "linear-gradient(90deg, #a78bfa, #c084fc)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <Magnetic className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-400/50 text-white hover:bg-violet-500 hover:border-violet-500 text-xs tracking-widest uppercase font-semibold transition-colors duration-300"
          >
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
        </Magnetic>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
          aria-label="menu"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="block w-6 h-0.5 bg-white" />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            className="block w-6 h-0.5 bg-white"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="md:hidden overflow-hidden bg-[#04060f]"
          >
            <div className="flex flex-col gap-4 pt-6 pb-4 px-2">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06, ease: EASE }}
                  className="text-3xl font-light text-white hover:text-violet-300 italic"
                >
                  {l.label}.
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

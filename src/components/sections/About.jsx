import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CapabilityCard from "../ui/CapabilityCard";
import Stat from "../ui/Stat";
import { CAPABILITIES, STATS } from "../../lib/data";
import { EASE } from "../../lib/Constants";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="px-5 md:px-10 py-20 md:py-32 max-w-[1400px] mx-auto bg-[#04060f]"
    >
      <div className="grid md:grid-cols-12 gap-8 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="md:col-span-4"
        >
          <div className="text-[10px] tracking-[0.3em] uppercase text-violet-400 mb-4 font-bold">
            001 / About
          </div>
          <h2 className="text-4xl md:text-7xl leading-[0.9] font-light text-white">
            A <em className="text-gradient font-medium">builder</em>,<br />
            first.
          </h2>
        </motion.div>

        <div className="md:col-span-7 md:col-start-6 space-y-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="text-lg md:text-2xl leading-relaxed text-slate-200 font-normal"
          >
            I&apos;m a{" "}
            <span className="text-violet-300 font-semibold">React Native developer</span> who
            builds cross-platform mobile apps that ship to both{" "}
            <span className="text-violet-300 font-semibold">iOS &amp; Android</span> from a single
            codebase — without compromising on speed, polish, or the native feel users expect.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="text-slate-300 leading-relaxed font-normal text-base md:text-lg"
          >
            My day-to-day is React Native CLI &amp; Expo with TypeScript. I work fluently with{" "}
            <span className="text-violet-200 font-medium">
              React Navigation, Redux Toolkit, Zustand, Reanimated, and Gesture Handler
            </span>{" "}
            — the kind of stack that turns a feature spec into a smooth, 60fps experience. I&apos;ve
            integrated REST and GraphQL APIs, handled secure auth flows, push notifications via
            Firebase, and shipped production builds through the Expo &amp; EAS pipeline straight to
            the Play Store.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="text-slate-300 leading-relaxed font-normal text-base md:text-lg"
          >
            What I genuinely care about: building{" "}
            <em className="text-white font-medium">reusable component libraries</em>, debugging the
            gnarly platform-specific edge cases, optimizing FlatLists and animations for mid-range
            Android devices, and keeping bundle sizes disciplined. Performance isn&apos;t a phase —
            it&apos;s the whole job.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="text-slate-400 leading-relaxed font-normal text-sm md:text-base"
          >
            Outside RN, I&apos;m comfortable with React for web, Node.js + Express on the backend,
            and I&apos;ve maintained a fleet of Webflow CMS sites. Currently pursuing my MCA at
            JECRC University while taking on freelance &amp; full-time React Native work across
            Jaipur, Gurgaon, Noida and Delhi — remote or on-site.
          </motion.p>

          {/* Capability cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            className="grid sm:grid-cols-2 gap-3 pt-2"
          >
            {CAPABILITIES.map((c, i) => (
              <CapabilityCard
                key={c.title}
                title={c.title}
                desc={c.desc}
                inView={inView}
                delay={0.7 + i * 0.08}
              />
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
            className="grid grid-cols-3 gap-3 md:gap-6 pt-6 border-t border-violet-500/15"
          >
            {STATS.map((s, i) => (
              <Stat
                key={s.label}
                number={s.number}
                label={s.label}
                inView={inView}
                delay={1.1 + i * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

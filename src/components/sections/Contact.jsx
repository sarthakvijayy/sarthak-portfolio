import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactCard from "../ui/ContactCard";
import { setCursorHover } from "../Cursor";
import { CONTACTS } from "../../lib/data";
import { EASE } from "../../lib/Constants";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="px-5 md:px-10 py-20 md:py-32 border-t border-violet-500/15 relative overflow-hidden bg-[#04060f]"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "rgba(139,92,246,0.10)", filter: "blur(100px)" }}
      />

      <div className="max-w-[1400px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-12"
        >
          <div className="text-[10px] tracking-[0.3em] uppercase text-violet-400 mb-4 font-bold">
            005 / Contact
          </div>
          <h2 className="text-5xl md:text-8xl leading-[0.85] font-light text-white">
            Let&apos;s <em className="font-semibold">build</em>
            <br />
            something <span className="text-gradient font-semibold">good.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="grid md:grid-cols-2 gap-4 md:gap-6 mt-12 md:mt-16"
        >
          {CONTACTS.map((c, i) => (
            <ContactCard
              key={c.label}
              {...c}
              inView={inView}
              delay={0.3 + i * 0.1}
              onHover={setCursorHover}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

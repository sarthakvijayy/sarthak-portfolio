import { memo } from "react";
import { motion } from "framer-motion";
import { EASE } from "../../lib/Constants";

function SplitText({ text = "", delay = 0 }) {
  // Defensive guard — if text isn't a string, render nothing
  if (typeof text !== "string" || !text) return null;

  return (
    <span
      className="inline-block text-[clamp(3rem,13vw,15rem)] leading-[1.1]"
      style={{ paddingTop: "0.1em", paddingBottom: "0.2em" }}
    >
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          initial={{ y: "60%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: delay + i * 0.05, duration: 0.8, ease: EASE }}
          className="inline-block"
        >
          {c === " " ? "\u00A0" : c}
        </motion.span>
      ))}
    </span>
  );
}

export default memo(SplitText);
import { memo } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Top progress bar — isolated so its scroll subscription
 * doesn't re-render the rest of the app.
 */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[150]"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #6d28d9, #a78bfa, #c084fc)",
      }}
    />
  );
}

export default memo(ScrollProgress);

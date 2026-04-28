import { useEffect, useState, memo } from "react";
import { motion } from "framer-motion";

/**
 * Custom cursor component — completely isolated from parent state.
 * Listens to its own mousemove + a custom event for hover scaling,
 * so cursor updates never re-render the rest of the app.
 *
 * Trigger hover scale anywhere with:
 *   window.dispatchEvent(new CustomEvent("cursor:hover", { detail: true }))
 */
function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const handleHover = (e) => setHovering(!!e.detail);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("cursor:hover", handleHover);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("cursor:hover", handleHover);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[200] hidden md:block"
      animate={{ x: pos.x - 8, y: pos.y - 8, scale: hovering ? 3 : 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <div
        className="w-4 h-4 rounded-full bg-violet-400"
        style={{ boxShadow: "0 0 24px rgba(167,139,250,0.9)" }}
      />
    </motion.div>
  );
}

/**
 * Helper to dispatch the cursor hover event from any component.
 * Saves passing setHover prop everywhere.
 */
export const setCursorHover = (hovering) => {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("cursor:hover", { detail: hovering }));
};

export default memo(Cursor);

import { memo } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { EASE } from "../../lib/constants";

const ICON_MAP = { Mail, Phone, Linkedin, MapPin };

function ContactCard({
  iconName,
  label,
  value,
  href,
  primary,
  disabled,
  delay,
  inView,
  onHover,
}) {
  const Icon = ICON_MAP[iconName] || Mail;
  const Tag = disabled ? motion.div : motion.a;

  return (
    <Tag
      href={disabled ? undefined : href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      onMouseEnter={() => !disabled && onHover?.(true)}
      onMouseLeave={() => !disabled && onHover?.(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: EASE }}
      whileHover={!disabled ? { y: -6, scale: 1.01 } : {}}
      className={`group relative p-6 md:p-8 rounded-2xl border transition-colors duration-500 overflow-hidden block ${
        primary
          ? "text-white border-violet-400 shadow-xl shadow-violet-900/40"
          : "border-violet-500/20 bg-[#0a0e24] hover:border-violet-400/60 hover:bg-[#0e1330]"
      }`}
      style={
        primary
          ? { background: "linear-gradient(135deg, #6d28d9 0%, #8b5cf6 50%, #a78bfa 100%)" }
          : undefined
      }
    >
      <div className="flex items-start justify-between mb-8 md:mb-12">
        <Icon
          size={22}
          className={
            primary
              ? "text-white"
              : "text-violet-300 group-hover:text-violet-200 transition-colors"
          }
        />
        {!disabled && (
          <ArrowUpRight
            size={22}
            className={`transition-transform duration-300 group-hover:rotate-45 ${
              primary ? "text-white" : "text-violet-300 group-hover:text-violet-200"
            }`}
          />
        )}
      </div>
      <div
        className={`text-[10px] tracking-[0.25em] uppercase mb-2 font-bold ${
          primary ? "text-white/80" : "text-violet-400"
        }`}
      >
        {label}
      </div>
      <div className={`text-xl md:text-3xl break-all font-semibold text-white`}>{value}</div>
    </Tag>
  );
}

export default memo(ContactCard);

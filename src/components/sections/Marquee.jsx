import { memo } from "react";
import { Sparkles } from "lucide-react";
import { MARQUEE_ITEMS } from "../../lib/data";

function Marquee() {
  return (
    <div className="border-y border-violet-500/15 py-6 md:py-8 overflow-hidden bg-[#0a0e24]">
      <div className="flex marquee-track whitespace-nowrap">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-8 md:gap-14 px-8 md:px-14">
            <span className="text-3xl md:text-6xl text-white font-light italic">{item}</span>
            <Sparkles size={20} className="text-violet-400 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Marquee);

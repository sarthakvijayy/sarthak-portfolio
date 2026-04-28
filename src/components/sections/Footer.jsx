import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-5 md:px-10 py-10 border-t border-violet-500/15 bg-[#04060f]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="text-2xl font-semibold text-white">Sarthak Vijay</div>
          <div className="text-[10px] tracking-[0.25em] uppercase text-violet-300 mt-1 font-semibold">
            React Native Developer · {new Date().getFullYear()}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/sarthakvijayvargiya"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-violet-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:Sarthakvj07@gmail.com"
            className="text-slate-300 hover:text-violet-300 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="#home"
            className="text-[10px] tracking-[0.25em] uppercase text-slate-300 hover:text-violet-300 transition-colors flex items-center gap-2 font-bold"
          >
            Back to top <span className="rotate-[-45deg] inline-block">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

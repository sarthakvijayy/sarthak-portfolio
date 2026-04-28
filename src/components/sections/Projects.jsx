import ProjectCard from "../ui/ProjectCard";
import { setCursorHover } from "../Cursor";
import { PROJECTS } from "../../lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-5 md:px-10 py-20 md:py-32 border-t border-violet-500/15 bg-[#04060f]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 md:mb-20">
          <div className="text-[10px] tracking-[0.3em] uppercase text-violet-400 mb-4 font-bold">
            003 / Projects
          </div>
          <h2 className="text-4xl md:text-7xl leading-[0.9] font-light text-white">
            Selected <em className="text-gradient font-medium">work.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              index={i}
              onHover={setCursorHover}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

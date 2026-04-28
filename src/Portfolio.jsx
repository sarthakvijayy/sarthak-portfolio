import { lazy, Suspense } from "react";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Nav from "./components/sections/Nav";
import Hero from "./components/sections/Hero";
import Marquee from "./components/sections/Marquee";

// Lazy-load sections below the fold — they're not needed until the user scrolls.
// This makes initial paint dramatically faster.
const About = lazy(() => import("./components/sections/About"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Contact = lazy(() => import("./components/sections/Contact"));
const Footer = lazy(() => import("./components/sections/Footer"));

// Simple fallback while lazy chunks load — matches the dark background so
// no flash, no layout shift.
const SectionFallback = () => (
  <div className="min-h-[400px] bg-[#04060f]" aria-hidden="true" />
);

export default function Portfolio() {
  return (
    <div className="bg-[#04060f] text-white overflow-x-hidden selection:bg-violet-500 selection:text-white min-h-screen">
      <Cursor />
      <ScrollProgress />
      <Nav />

      <main className="cursor-none-md">
        {/* Above the fold — always loaded */}
        <Hero />
        <Marquee />

        {/* Below the fold — lazy loaded */}
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

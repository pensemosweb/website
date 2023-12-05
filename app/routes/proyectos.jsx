import Particles from "../components/Particles/Particles";
import Principle from "../components/Portafolio/Principle";
import Hero from "../components/Portafolio/Hero";
import Lenguajes from "../components/Portafolio/Lenguajes";
import Projects from "../components/Portafolio/Projects";
import Metodos from "../components/Portafolio/Metodos";
export function Links() {
  return [
    {
      rel: "style",
      href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
    },
    { src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" },
  ];
}

export default function Proyectos() {
  return (
    <section className="bg-slate-900">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-0" />
        {/* Illustration */}
        <div
          className="-z-0 absolute inset-0 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        ></div>

        <Hero />

        <Lenguajes />
        <Principle />

        <Metodos />
        <Projects />
      </div>
    </section>
  );
}

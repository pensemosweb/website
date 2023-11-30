import Particles from "../components/Particles/Particles"
import Principle from "../components/Portafolio/Principle";
import Illustration from "~/assets/svgs/glow-bottom.svg";
import Features from "../components/Portafolio/Features"
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
        >
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0">
            <img
              src={Illustration}
              className="max-w-none"
              width={2146}
              alt="Hero Illustration"
            />
          </div>
        </div>
        <Principle />

        <Features/>
      </div>
    </section>
  );
}

import Illustration from "~/assets/imgs/proyectos/glow-bottom.svg";
export default function BgIllustration() {
  return (
    <div
      className="absolute inset-0 -z-0 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10 translate-y-30">
        <img
          src={Illustration}
          className="max-w-none hue-rotate-[374deg] brightness-60"
          width={2146}
          alt="Hero Illustration"
        />
      </div>
    </div>
  );
}

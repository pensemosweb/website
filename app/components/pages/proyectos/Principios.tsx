"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Particles from "~/components/Particles/Particles";

import { items } from "~/data/principles";

export default function Testimonials() {
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const [autorotateTiming] = useState<number>(7000);

  const testimonials = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(active + 1 === items.length ? 0 : (active) => active + 1);
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate, autorotateTiming]);

  const heightFix = () => {
    if (testimonials.current && testimonials.current.parentElement)
      testimonials.current.parentElement.style.height = `${testimonials.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      {/* Particles animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full -mt-6">
        <Particles className="absolute inset-0" quantity={50} staticity={10} />
      </div>
      <div className="max-w-3xl mx-auto py-32 px-4 sm:px-6 text-center">
        <h3
          className="h3 font-bold text-4xl lg:text-6xl relative z-10 bg-clip-text [-webkit-background-clip:text] text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-200/60 pb-3"
          data-aos="fade-down"
        >
          Principios ágiles
        </h3>
        <p
          className="text-slate-400 mb-8 text-center relative z-10 text-xl"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Adoptamos la agilidad como filosofía primordial. 💡 Nuestros
          principios ágiles son la masa rocosa para la construcción de cada
          proyecto.
        </p>
        <div className="relative overflow-hidden z-10">
          {/* Carousel */}
          <div
            className="text-center sm:w-[70%] mx-auto"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            {/* Testimonial image */}
            <div className="relative h-40 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_40%,theme(colors.white))]  [-webkit-mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_40%,theme(colors.white))]">
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none 
              before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b 
              before:from-slate-400/20 before:to-transparent before:to-20%
              after:rounded-full after:absolute after:inset-0
              after:bg-slate-900 after:m-px before:-z-20 after:-z-20"
              >
                {items.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    className="absolute inset-0 h-full -z-10"
                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                    enterFrom="opacity-0 -rotate-[60deg]"
                    enterTo="opacity-100 rotate-0"
                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                    leaveFrom="opacity-100 rotate-0"
                    leaveTo="opacity-0 rotate-[60deg]"
                    beforeEnter={() => heightFix()}
                  >
                    <img
                      decoding="async"
                      loading="lazy"
                      className="relative mt-5 left-1/2 -translate-x-1/2 rounded-full"
                      src={item.img}
                      width={150}
                      height={150}
                      alt={item.title}
                    />
                  </Transition>
                ))}
              </div>
            </div>
            {/* Text */}
            <div className="mt-15 mb-10 md:mb-5 transition-all duration-150 delay-300 ease-in-out">
              <div className="relative flex flex-col" ref={testimonials}>
                {items.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-in-out duration-500 delay-200 order-first"
                    enterFrom="opacity-0 -translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-out duration-300 delay-300 absolute"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-4"
                    beforeEnter={() => heightFix()}
                  >
                    <div className="text-lg font-bold bg-clip-text [-webkit-background-clip:text] text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
                      <span className=" text-2xl font-bold font-heading">
                        {item.title}
                      </span>
                      {". "}
                      {item.text}
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center -m-1.5">
              {items.map((item, index) => (
                <button
                  className={`btn-sm m-1.5 text-xs py-1.5 text-slate-300 transition duration-150 ease-in-out [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none ${
                    active === index
                      ? "opacity-100"
                      : "opacity-30 hover:opacity-60"
                  }`}
                  key={index}
                  onClick={() => {
                    setActive(index);
                    setAutorotate(false);
                  }}
                >
                  <span className="relative">
                    <span className="text-slate-50">{item.name}.</span>{" "}
                    <span>{item.title}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

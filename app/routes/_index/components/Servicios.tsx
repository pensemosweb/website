import ListServicios from "./ListServicios";
import { useRef } from "react";
import ButtonLink from "~/components/Buttons/ButtonLink";
import MayorQue from "~/components/Icons/MayorQue";

export default function SectionServicios() {
  const titleServicios = useRef(null);

  return (
    <section
      data-testid="servicios"
      className="relative container mx-auto overflow-hidden px-4 py-10 lg:py-20"
    >
      <div className="text-center">
        <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-pink-500 bg-orange-50 rounded-full">
          SERVICIOS
        </span>
        <h2
          ref={titleServicios}
          data-testid="title-servicios"
          className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-8"
        >
          <span>Nuestros </span>
          <span className="font-serif italic">Servicios</span>
        </h2>
      </div>
      <ListServicios referenceTitle={titleServicios} />

      <div className="flex justify-center mt-5">
        <ButtonLink
          href="/servicios"
          color="black"
          typeHover="bottomBar"
          icon={<MayorQue />}
          rounded
        >
          Más sobre Servicios
        </ButtonLink>
      </div>
    </section>
  );
}

import React from "react";
import imagen1 from "~/assets/imgs/portafolio/icons8-javascript.svg";
import imagen2 from "~/assets/imgs/portafolio/icons8-html.svg";
import imagen3 from "~/assets/imgs/portafolio/icons8-css.svg";
import imagen4 from "~/assets/imgs/portafolio/icons8-react.svg";
import imagen5 from "~/assets/imgs/portafolio/icons8-javascript.svg";
import imagen6 from "~/assets/imgs/portafolio/icons8-html.svg";
import imagen7 from "~/assets/imgs/portafolio/icons8-css.svg";
import imagen8 from "~/assets/imgs/portafolio/icons8-react.svg";
import imagen9 from "~/assets/imgs/portafolio/icons8-css.svg";
import imagen10 from "~/assets/imgs/portafolio/icons8-react.svg";

export default function Lenguajes() {
  return (
    <section className="bg-gray-900 2xl:py-24 2xl:bg-white">
      <div className="px-4 mx-auto overflow-hidden bg-gray-900 max-w-7xl sm:px-6 lg:px-8">
        <div className="py-10 sm:py-16 lg:py-20 2xl:pl-24">
          <div>
            <h2 className="text-lg text-white mb-8">
              Desde la primera charla con el dueño del proyecto hasta las
              pruebas punto a punto al código, desde la base de datos hasta la
              experiencia del usuario, cada fase es impulsada por la agilidad y
              prácticas ágiles. Creamos sitios web y aplicaciones cautivadoras
              para elevar tu presencia digital y perfeccionamos el arte del
              software para ofrecerte soluciones efectivas y modernas.
            </h2>
          </div>
          <div className="grid grid-cols-10 gap-4">
            <img src={imagen1} alt="" className="animated-image" />
            <img src={imagen2} alt="" className="animated-image" />
            <img src={imagen3} alt="" className="animated-image" />
            <img src={imagen4} alt="" className="animated-image" />
            <img src={imagen5} alt="" className="animated-image" />
            <img src={imagen6} alt="" className="animated-image" />
            <img src={imagen7} alt="" className="animated-image" />
            <img src={imagen8} alt="" className="animated-image" />
            <img src={imagen9} alt="" className="animated-image" />
            <img src={imagen10} alt="" className="animated-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

import ButtonLink from "~/components/Buttons/ButtonLink";

export interface PropsCardCotact {
  urlImg: string;
  isEmail: boolean;
  description: string;
  medio: string;
  icon: any;
  anchor: string;
}

export default function CardContact({
  urlImg,
  isEmail,
  description,
  medio,
  icon,
  anchor,
}: PropsCardCotact) {
  return (
    <div
      className={`w-full md:w-1/2 lg:w-auto px-4 xl:px-10 ${
        isEmail ? "mb-10 md:mb-0" : null
      } motion-safe:animate-fadeInUp`}
      style={{
        animationDelay: "0s",
        animationFillMode: "both",
      }}
    >
      <div className="max-w-sm mx-auto h-full py-8 px-6 bg-white border border-gray-200 rounded-5xl">
        <div className="max-w-2xs mx-auto text-center">
          <img
            decoding="async"
            loading="lazy"
            className="block mx-auto mb-3"
            src={urlImg}
            alt=""
          />
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {isEmail ? "Envía un correo" : "Puedes marcar a"}
          </h3>
          <p className="text-gray-600 mb-3">{description}</p>
          <span className="block text-sm text-pink-500 mb-8">{medio}</span>
          <ButtonLink
            href={anchor}
            color="black"
            icon={icon}
            typeHover="bottomBar"
            rounded
          >
            {isEmail ? "Contáctanos" : "Llama ahora"}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

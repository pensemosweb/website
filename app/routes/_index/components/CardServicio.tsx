import { Link } from "@remix-run/react";
interface PropsServicio {
  svgIcon: string | JSX.Element | JSX.Element[];
  servive: string;
  description: string;
  iconColor: string;
  isUltimate: boolean;
  position: string;
  delay: number;
  start: boolean;
}

export default function Servicio({
  svgIcon,
  servive,
  description,
  iconColor,
  isUltimate,
  position,
  delay,
  start = false,
}: PropsServicio) {
  let fadeIn = "";
  let reverseCard = "";
  let marginIcon = "";
  let textOrientation = "";

  if (position === "left") {
    fadeIn = "sm:motion-safe:animate-fadeInRight sm:motion-safe:opacity-100";
    reverseCard = "flex-row-reverse";
    marginIcon = "ml-6";
    textOrientation = "text-right";
  } else {
    fadeIn = "sm:motion-safe:animate-fadeInLeft sm:motion-safe:opacity-100";
    marginIcon = "mr-6";
    textOrientation = "text-left";
  }

  return (
    <div
      className={`flex items-center min-h-[137px] sm:motion-safe:opacity-0 ${reverseCard} ${
        start ? fadeIn : ""
      }`}
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: "both",
      }}
    >
      <div
        className={`flex flex-shrink-0 rounded-full w-15 h-15 items-center justify-center ${iconColor} ${marginIcon}`}
      >
        {svgIcon}
      </div>

      <Link to="/servicios" className={`${textOrientation}`}>
        <h3 className={`text-xl font-body`}>{servive}</h3>
        <span className={`text-sm text-gray-500`}>{description}</span>
      </Link>
    </div>
  );
}

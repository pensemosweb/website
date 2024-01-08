import type { ButtonProps } from "./Button.d";
import { COLORS, HOVERS, SIZE_BUTTON } from "./Button.classNames";

export default function Button({
  className,
  children,
  icon,
  rounded,
  disabled,
  color,
  typeHover = "none",
  isFullContent,
  type,
  size,
}: ButtonProps) {
  const defaultClass = `relative w-full group inline-block font-semibold overflow-hidden`;
  const border = rounded ? `rounded-full` : "rounded-sm";
  const colorButton = color ? COLORS[color] : "";
  const fullContent = isFullContent ? `w-full h-full` : "";
  const sizeButton = SIZE_BUTTON[size || "md"];

  let hoverSytles = "";
  let hoverBar = "";

  if (typeHover === "bottomBar") {
    hoverBar = HOVERS["bottomBar"];
    hoverSytles = "";
  } else {
    hoverBar = "hidden";
    hoverSytles = HOVERS[typeHover];
  }

  const finalButtonClasname = `${className} ${sizeButton} ${fullContent} ${hoverSytles} ${defaultClass} ${border} ${colorButton}`;

  return (
    <button
      className={`${finalButtonClasname}`}
      disabled={disabled}
      type={type}
    >
      <div className={`${hoverBar}`} />
      <div className="relative flex items-center justify-center">
        {children}
        {icon && <span className="ml-4">{icon}</span>}
      </div>
    </button>
  );
}

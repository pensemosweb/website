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
  const border = rounded ? `rounded-full` : "rounded-sm";
  const colorButton = color ? COLORS[color || "white"] : null;
  const fullContent = `w-full h-full`;
  const sizeButton = size != "auto" ? SIZE_BUTTON[size] : null;

  let hoverSytles = "";
  let hoverBar = "";

  if (typeHover === "bottomBar") {
    hoverBar = HOVERS["bottomBar"];
    hoverSytles = "";
  } else {
    hoverBar = "hidden";
    hoverSytles = HOVERS[typeHover];
  }

  const buttonClasname = `relative w-full group inline-block font-semibold overflow-hidden ${border} ${
    className || sizeButton ? `${className} ${sizeButton}` : "py-4 px-6"
  } ${isFullContent ? fullContent : null} ${hoverSytles} ${colorButton}`;

  return (
    <button className={`${buttonClasname}`} disabled={disabled} type={type}>
      <div className={`${hoverBar}`} />
      <div className="relative flex items-center justify-center">
        {children}
        {icon && <span className="ml-4">{icon}</span>}
      </div>
    </button>
  );
}

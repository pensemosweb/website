import { Link } from "@remix-run/react";
import Button from "./Button";
import type { ButtonLinkProps } from "./Button.d";

export default function ButtonLink({
  href,
  children,
  buttonClassName,
  className,
  rounded,
  color,
  typeHover,
  icon,
  isFullContent,
  size = "xl_2",
}: ButtonLinkProps) {
  const border = rounded ? `rounded-full` : "rounded-sm";
  const finalClassName = `${border} ${className}`;

  return (
    <Link to={href} className={finalClassName}>
      <Button
        rounded={rounded}
        color={color}
        typeHover={typeHover}
        icon={icon}
        className={buttonClassName}
        size={size}
        isFullContent={isFullContent}
      >
        {children}
      </Button>
    </Link>
  );
}

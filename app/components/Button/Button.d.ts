export interface ButtonProps {
  className?: string;
  children: JSX.Element | string;
  icon?: JSX.Element;
  rounded?: boolean;
  disabled?: boolean;
  color?: "white" | "black" | "transparent" | "pink";
  typeHover?: "bottomBar" | "scale" | "opacity" | "none";
  isFullContent?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export interface ButtonLinkProps extends ButtonProps {
  href: string;
  linkClassName?: string;
}

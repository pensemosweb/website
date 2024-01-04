export const COLORS = {
  white: "bg-white text-black border border-gray-800 shadow",
  black: "bg-gray-900 text-white",
  transparent: "bg-transparent text-black border border-gray-800",
  pink: "bg-gradient-pink text-white",
};

export const HOVERS = {
  bottomBar:
    "absolute top-0 right-full w-full h-full bg-gradient-pink transform group-hover:translate-x-full group-hover:scale-105 transition duration-500",
  scale: "hover:scale-110 transition duration-100",
  opacity: "hover:opacity-60",
  none: "",
};

export const STYLE_BUTTON = {
  green: "bg-pw-primary text-white hover:bg-pw-primary/80",
  orange: "bg-pw-tertiary text-white hover:bg-pw-tertiary/80",
  black: "bg-pw-neutral text-white hover:bg-pw-neutral/80",
  default: "bg-white shadow-md hover:bg-blue-600 hover:text-white",
};

export const SIZE_BUTTON = {
  xs: "px-3 py-2 text-xs",
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-5 py-3 text-base",
  xl: "px-6 py-3.5 text-base",
};

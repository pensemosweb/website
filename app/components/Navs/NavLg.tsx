import { forwardRef } from "react";
import Logo from "~/components/Logo/Logo";
import type { PropsNavLg } from "./Nav.d";
import { whatsApp } from "~/data/navItems";
import WhatsApp from "~/components/Icons/WhatsApp";

export default forwardRef(function NavLg(
  {
    handleMenuButton,
    hasLogo,
    items,
    secondaryItems,
    aLign,
    children,
    isHome,
    hasScrolledDown,
    logoColor,
    anchorClasses,
    highLightClasses,
    borderClasses = "",
  }: PropsNavLg,
  ref: React.ForwardedRef<HTMLElement>,
) {
  let navClasses = isHome
    ? "bg-white bg-opacity-0 hover:bg-black"
    : "bg-black border border-x-0 border-t-0 border-pink-500";
  const bgOnScroll = hasScrolledDown
    ? "!py-3 !bg-black bg-opacity-100 backdrop-blur"
    : "py-6";
  return (
    <nav
      ref={ref}
      className={`font-heading fixed top-0 z-50 w-full px-4 duration-1000 ${navClasses} ${bgOnScroll} ${borderClasses}`}
      style={{
        lineHeight: 1,
        transitionProperty:
          "padding-top, padding-bottom, background-color, backdrop-filter",
      }}
    >
      <div className="mx-auto">
        <div className={"flex items-center justify-" + aLign}>
          {hasLogo && (
            <a className="inline-block text-lg mr-14 max-xss:mr-1" href="/">
              <Logo
                className="h-10 fill-white transition-all duration-1000"
                color={logoColor}
              />
            </a>
          )}
          <div className="lg:hidden ml-auto">
            <button
              className="navbar-burger flex w-12 h-12 items-center justify-center bg-gradient-pink hover:bg-gradient-blue rounded-md transition duration-200"
              onClick={handleMenuButton}
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18H21"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {items && (
            <ul className="hidden lg:flex lg:w-auto lg:space-x-6">
              {items?.map(({ to, label, target }) => (
                <li key={to}>
                  <a className={anchorClasses} href={to} target={target}>
                    <div
                      className={`absolute bottom-4 right-full w-full h-1 ${highLightClasses} transform group-hover:translate-x-full transition duration-500`}
                    />
                    <span className="relative">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div className="hidden lg:block ml-auto">
            <a
              href={`${whatsApp.to}${encodeURI(" tus servicios")}`}
              className={`${anchorClasses} !px-0 !py-0 rounded-full text-white`}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={`absolute top-0 right-full w-full h-full ${highLightClasses} transform group-hover:translate-x-full group-hover:scale-102 transition duration-500`}
              />
              <span className="relative">
                <WhatsApp />
              </span>
            </a>
            {secondaryItems && (
              <div className="flex items-center">
                {secondaryItems.map(({ to, label, isButton, target }) => {
                  return (
                    <a
                      key={to}
                      className={`${anchorClasses} border border-gray-200 rounded-md text-white`}
                      href={to}
                      target={target}
                    >
                      <div
                        className={`absolute top-0 right-full w-full h-full ${highLightClasses} transform group-hover:translate-x-full group-hover:scale-102 transition duration-500`}
                      />
                      <span className="relative">{label}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {children}
        </div>
      </div>
    </nav>
  );
});

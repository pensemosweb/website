import { Link } from "@remix-run/react";


export default function HeroSection({
  title,
  description,
  buttonText,
  buttonLink,

}) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
    
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-16">
            <h1
              className="mb-4 lg:text-7xl md:text-6xl text-4xl text-white "
              data-aos="fade-up"
            >
              {title}
            </h1>
            <p
              className="text-xl text-gray-100 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {description}
            </p>
            <div className="flex justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <Link
                  className="btn rounded-sm text-white bg-gradient-pink hover:scale-110 lg:w-full lg:mb-4 w-auto mb-0"
                  to={buttonLink}
                >
                  {buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

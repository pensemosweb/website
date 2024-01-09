export function AgileCardStep(props) {
    return (
      <div className="pb-4">
        <div className="relative">
          {/* Gray box */}
          <div className="absolute inset-0 -z-10 rounded-lg border border-pink-500" />
          {/* Content */}
          <div className="relative px-6 pb-8 md:px-12 lg:pb-0">
            {/* Testimonial */}
            <div className="lg:flex items-center lg:space-y-0 lg:space-x-8 text-center lg:text-left pt-5 lg:py-10">
              <div className="shrink-0 relative ">
                <img
                  src={props.src}
                  alt={props.alt}
                  width={props.width}
                  height={props.height}
                />
              </div>
              <div className="relative pt-5">
                <h2 className="mb-4 text-2xl lg:text-3xl font-heading">
                  {props.titlea}{" "}
                  <span className="font-serif italic text-2xl lg:text-3xl">
                    {props.titleb}
                  </span>
                </h2>
                <h4 className="mb-4 text-base sm:text-justify">
                  {props.description}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
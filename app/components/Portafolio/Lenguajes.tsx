import Client01 from "~/assets/imgs/portafolio/icons8-javascript.svg";

export default function Clients() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 flex sm:px-6">
        {/* Particles animation */}

        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
            {/* * Custom styles in src/css/additional-styles/theme.scss */}
            <div className="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-slate-900 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-slate-900">
              <div className="swiper-wrapper !ease-linear select-none items-center">
                {/* Carousel items */}
                <div className="swiper-slide !w-auto">
                  <img src={Client01} alt="Client 01" width={110} height={21} />
                </div>
                <div className="swiper-slide !w-auto">
                  <img src={Client01} alt="Client 02" width={70} height={25} />
                </div>
                <div className="swiper-slide !w-auto">
                  <img
                    className="mt-1"
                    src={Client01}
                    alt="Client 03"
                    width={107}
                    height={33}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <img src={Client01} alt="Client 04" width={85} height={36} />
                </div>
                <div className="swiper-slide !w-auto">
                  <img src={Client01} alt="Client 05" width={86} height={18} />
                </div>
                <div className="swiper-slide !w-auto">
                  <img src={Client01} alt="Client 06" width={78} height={34} />
                </div>
                <div className="swiper-slide !w-auto">
                  <img src={Client01} alt="Client 07" width={83} height={23} />
                </div>
                <div className="swiper-slide !w-auto">
                  <img src={Client01} alt="Client 08" width={98} height={26} />
                </div>
                <div className="swiper-slide !w-auto">
                  <img
                    className="mt-2"
                    src={Client01}
                    alt="Client 09"
                    width={92}
                    height={28}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

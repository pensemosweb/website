import team from "~/assets/imgs/equipo/bg-section-team.webp";
import { dataMembersCards } from "./data/dataMembersCards";
import { TeamMembersCards } from "./components/teamMemberscCards";
export default function CardsEquipo() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 pb-12">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={team}
          width={1440}
          height={394}
          alt=""
        />
        <div
          className="absolute inset-0 bg-gray-900 opacity-75"
          aria-hidden="true"
        ></div>
      </div>
      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-20 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl text-white tracking-tight mx-4 md:text-7xl font-bold">
              <span
                className="font-heading"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Conoce nuestro{" "}
              </span>
              <span
                className="font-serif italic"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                equipo
              </span>
            </h1>
            <p
              className="text-xl text-gray-300 pt-5"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Permitimos a los desarrolladores crear cosas increibles
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap gap-8 relative items-center pb-12">

        {dataMembersCards.map((item, idx) => (
          <TeamMembersCards
          key = {idx}
          srcBackground={item.srcBackground}
          srcMemberImg={item.srcMemberImg}
          altMemberImg = {item.altMemberImg}
          developerName = {item.developerName}
          specialty = {item.specialty}
          />
        ))}

      </div>
    </section>
  );
}

import nestor from "../../assets/imgs/equipo/nestor.webp";
import fatima from "../../assets/imgs/equipo/fatima.webp";
import octavio from "../../assets/imgs/equipo/octavio.webp";
import jaime from "../../assets/imgs/equipo/jaime.webp";
import norberto from "../../assets/imgs/equipo/norberto.webp";
import team from "../../assets/imgs/equipo/bg-section-team.webp";
import codigores from "../../assets/imgs/equipo/bg-codigo.webp";
import codigoresfatima from "../../assets/imgs/equipo/bg-codigo-fatima.webp";
import codigoresnestor from "../../assets/imgs/equipo/bg-codigo-nestor.webp";
import codigoresoctavio from "../../assets/imgs/equipo/bg-codigo-octavio.webp";
import codigoresnorberto from "../../assets/imgs/equipo/bg-codigo-norberto.webp";
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
        <TeamMembersCards
          src1={codigoresoctavio}
          src2={octavio}
          height={dataMembersCards[0].height}
          developerName={dataMembersCards[0].developerName}
          specialty={dataMembersCards[0].specialty}
        />
        <TeamMembersCards
          src1={codigoresnestor}
          src2={nestor}
          height={dataMembersCards[1].height}
          developerName={dataMembersCards[1].developerName}
          specialty={dataMembersCards[1].specialty}
        />
        <TeamMembersCards
          src1={codigoresnorberto}
          src2={norberto}
          height={dataMembersCards[2].height}
          developerName={dataMembersCards[2].developerName}
          specialty={dataMembersCards[2].specialty}
        />
        <TeamMembersCards
          src1={codigoresfatima}
          src2={fatima}
          height={dataMembersCards[2].height}
          developerName={dataMembersCards[2].developerName}
          specialty={dataMembersCards[2].specialty}
        />
        <TeamMembersCards
          src1={codigores}
          src2={jaime}
          height={dataMembersCards[2].height}
          developerName={dataMembersCards[2].developerName}
          specialty={dataMembersCards[2].specialty}
        />
      </div>
    </section>
  );
}

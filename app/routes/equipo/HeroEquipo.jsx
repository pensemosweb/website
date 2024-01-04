import Hero from "~/components/Hero/Hero";
import BgIllustration from "~/routes/Equipo/BgIllustration";
export default function HeroEquipo() {
  return (
    <section>
      <div className="bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 relative">
          <BgIllustration />

          <Hero
            title="  Maximo Rendimiento"
            description="
              Imagina un enfoque que maximice la colaboración, acelere la
                  entrega de resultados, fomente la mejora constante y se adapte
                  a los cambios en el camino."
            buttonText="Iniciar"
            buttonLink="/contacto"
          />
        </div>
      </div>
    </section>
  );
}

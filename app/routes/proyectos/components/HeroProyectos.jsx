import BgIllustration from "~/routes/proyectos/components/BgIllustration";
import Hero from "~/components/Hero/Hero";

export default function HeroProyectos() {
  return (
    <section className="bg-black">
      <div className="relative max-w-6xl mx-auto pb-0 px-4 sm:px-6">
        {/* Illustration */}
        <BgIllustration />
        <Hero
          title="Proyectos"
          description="¡Innovación con Agilidad en Cada Paso! 🚀 Nuestra agilidad no se
              limita a palabras. ¡Es una forma de vida!"
          buttonText="Iniciar"
          buttonLink="/contacto"
        />
      </div>
    </section>
  );
}


import HeroSection from "~/components/Hero/hero";
import BgIllustration from "~/components/BgIlustration/BgIlustration";

export default function MentoriasHero() {
  return (
    <section >
         <div className="relative max-w-6xl mx-auto pb-0 px-4 sm:px-6">
      <BgIllustration />

      <HeroSection
        title="Mentorías One to One personalizadas"
        description="⏳🌟 Ama y cuida tu recurso máximo, no renovable: tu tiempo. Crea proyectos reales; la práctica hace al maestro, evita agotarte con información innecesaria. 👩‍💻👨‍💻 Desarrolladores de calidad para crear productos de calidad."
        buttonText="Regístrate"
        buttonLink="./registro"
      />
      </div>
    </section>

  );
}

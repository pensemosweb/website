import React from "react";

import { BitbucketIcon } from "~/components/pages/proyectos/Bitbucket";
import { JsIcon } from "~/components/pages/proyectos/Js";
import { HtmlIcon } from "~/components/pages/proyectos/Html";
import { CssIcon } from "~/components/pages/proyectos/Css";
import { NodeIcon } from "~/components/pages/proyectos/Node";
import Mongo from "~/assets/imgs/portafolio/mongodb-svgrepo-com.svg";
import { NextIcon } from "~/components/pages/proyectos/Next";
import { KotlinIcon } from "~/components/pages/proyectos/Kotlin";
import { FirebaseIcon } from "~/components/pages/proyectos/Firebase";
import { JavaIcon } from "~/components/pages/proyectos/Java";
import { ReactIcon } from "~/components/pages/proyectos/React";
import { ScrumIcon } from "~/components/pages/proyectos/Scrum";
import { RemixIcon } from "~/components/pages/proyectos/Remix";
import { AgileIcon } from "~/components/pages/proyectos/Agile";
import { LitIcon } from "~/components/pages/proyectos/Lit";
import { JiraIcon } from "~/components/pages/proyectos/Jira";
import { AngularIcon } from "~/components/pages/proyectos/Angular";
import  PlayWrightIcon  from "~/assets/imgs/portafolio/playwright.webp";
import { GitIcon } from "~/components/pages/proyectos/Git";
import { CypressIcon } from "~/components/pages/proyectos/Cypress";
import { FlutterIcon } from "~/components/pages/proyectos/Flutter";
import { GithubIcon } from "~/components/pages/proyectos/Github";

export default function Lenguajes() {
  return (
    <section id="lenguaje" className="bg-gray-900 2xl:py-24 2xl:bg-white">
      <div className="px-4 mx-auto overflow-hidden bg-gray-900 max-w-7xl sm:px-6 lg:px-8">
        <div className="py-10 sm:py-16 lg:py-20 2xl:pl-24">
          <div>
            <h2 className="text-lg text-white mb-8">
              Desde la primera charla con el dueño del proyecto hasta las
              pruebas punto a punto al código, desde la base de datos hasta la
              experiencia del usuario, cada fase es impulsada por la agilidad y
              prácticas ágiles. Creamos sitios web y aplicaciones cautivadoras
              para elevar tu presencia digital y perfeccionamos el arte del
              software para ofrecerte soluciones efectivas y modernas.
            </h2>
          </div>
          <div className="grid grid-cols-11 gap-4 items-center max-sm:grid-cols-6 max-md:grid-cols-8">
            <KotlinIcon />
            <NextIcon />

            <img src={Mongo} alt="" className="animated-image" />
            <CssIcon />
            <AngularIcon />
            <JsIcon />
            <HtmlIcon />
            <FirebaseIcon />
            <NodeIcon />
            <ReactIcon />
            <JavaIcon />
          </div>
          <div className="pt-4 grid grid-cols-11 gap-4 items-center max-sm:grid-cols-6 max-md:grid-cols-8">
            <JiraIcon />
            <BitbucketIcon />

            <CypressIcon />
            <GithubIcon />
            <GitIcon />
            <ScrumIcon />
            <AgileIcon />

            <img src={PlayWrightIcon} alt="" className="animated-image" />
            <FlutterIcon />
            <LitIcon />
            <RemixIcon />
          </div>
        </div>
      </div>
    </section>
  );
}

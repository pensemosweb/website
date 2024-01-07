import colaboraAprende from "../../../assets/imgs//equipo/Unsplash-colaborayaprende.webp";
import creaAsap from "../../../assets/imgs/equipo/Unsplash-creaASAP.webp";
import retroalimenta from "../../../assets/imgs/equipo/Unsplash-retroalimenta.webp";
import adaptaMejora from "../../../assets/imgs//equipo/Unsplash-adapta.webp";
import { dataAgileMethod } from "../data/dataAgileMethod";
import { AgileMethodStep } from "./AgileCardStep";
export default function ColaboraAprende() {
  return (
    <div data-aos="fade-right">
      <AgileMethodStep
        src={colaboraAprende}
        alt={dataAgileMethod[0].alt}
        width={dataAgileMethod[0].width}
        height={dataAgileMethod[0].height}
        titlea={dataAgileMethod[0].titlea}
        titleb={dataAgileMethod[0].titleb}
        description={dataAgileMethod[0].description}
      />
      <AgileMethodStep
        src={creaAsap}
        alt={dataAgileMethod[1].alt}
        width={dataAgileMethod[1].width}
        height={dataAgileMethod[1].height}
        titlea={dataAgileMethod[1].titlea}
        titleb={dataAgileMethod[1].titleb}
        description={dataAgileMethod[1].description}
      />
      <AgileMethodStep
        src={retroalimenta}
        alt={dataAgileMethod[2].alt}
        width={dataAgileMethod[2].width}
        height={dataAgileMethod[2].height}
        titlea={dataAgileMethod[2].titlea}
        description={dataAgileMethod[2].description}
      />
      <AgileMethodStep
        src={adaptaMejora}
        alt={dataAgileMethod[3].alt}
        width={dataAgileMethod[3].width}
        height={dataAgileMethod[3].height}
        titlea={dataAgileMethod[3].titlea}
        titleb={dataAgileMethod[3].titleb}
        description={dataAgileMethod[3].description}
      />
    </div>
  );
}

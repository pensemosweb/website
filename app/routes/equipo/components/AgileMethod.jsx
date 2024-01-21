import { dataAgileMethod } from "../data/dataAgileMethod";
import { AgileCardStep } from "./AgileCardStep";
export default function ColaboraAprende() {
  return (
    <div data-aos="fade-right">
      {dataAgileMethod.map((item, idx) => (
        <AgileCardStep
        key = {idx}
        src={item.src}
        alt = {item.alt}
        width = {item.width}
        heigth = {item.height}
        titlea = {item.titlea}
        titleb = {item.titleb}
        description = {item.description}
        />
      ))}
    </div>
  );
}

import { ElementoEquipo } from "src/app/elementosequipo/models/elementoequipo";

export interface Maleta {
  id: string
  peso: number;
  elementos: ElementoEquipo[];
}

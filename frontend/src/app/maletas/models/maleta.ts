import { ElementoEquipo } from "src/app/elementosequipo/models/elementoequipo";

export interface Maleta {
  id: string
  pesoEnVacio: number;
  elementos: any[];
  urlMaleta: string;
}

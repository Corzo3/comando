import { ElementoEquipo } from "src/app/elementosequipo/models/elementoequipo";
import { Maleta } from "./maleta";

export class Maletaimpl implements Maleta {
  id: string = '';
  pesoEnVacio: number = 0;
  elementos: ElementoEquipo[] = []
  urlMaleta: string = '';
}

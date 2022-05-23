import { ElementoEquipo } from "src/app/elementosequipo/models/elementoequipo";
import { Maleta } from "./maleta";

export class Maletaimpl implements Maleta {
  id: string = '';
  peso: number = 0;
  elementos: ElementoEquipo[] = []
}

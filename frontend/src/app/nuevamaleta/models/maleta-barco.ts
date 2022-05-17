import { Maleta } from "./maleta";

export interface MaletaBarco extends Maleta {
  id: string;
  fechaRecogida: string;
}

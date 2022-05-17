import { Maleta } from "./maleta";

export interface MaletaCabina extends Maleta {
  id: string;
  altura: number;
  anchura: number;
  profundidad: number;
}

import { Maletacabina } from "./maletacabina";
import { Maletaimpl } from "./maletaimpl";

export class Maletacabinaimpl extends Maletaimpl implements Maletacabina {
  altura: number = 0;
  anchura: number = 0;
  profundidad: number = 0;
  constructor(pesoEnVacio: number, altura: number, anchura: number, profundidad: number) {
    super();
    this.pesoEnVacio = super.pesoEnVacio
    this.altura = altura
    this.anchura = anchura
    this.profundidad = profundidad
  }
}

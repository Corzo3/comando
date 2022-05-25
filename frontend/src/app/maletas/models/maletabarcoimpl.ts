import { Maletabarco } from "./maletabarco";
import { Maletaimpl } from "./maletaimpl";

export class Maletabarcoimpl extends Maletaimpl implements Maletabarco{
  fechaRecogida: string = '';
  constructor(pesoEnVacio: number, fechaRecogida : string) {
    super();
    this.fechaRecogida = fechaRecogida
    this.pesoEnVacio = super.pesoEnVacio
  }

}

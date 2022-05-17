import { ElementoEquipo } from "./elementoequipo";

export class ElementoequipoImpl implements ElementoEquipo{
  id: string = '';
  nombre: string = '';
  peso: number = 0;

  constructor(nombre:string, peso: number){}
}

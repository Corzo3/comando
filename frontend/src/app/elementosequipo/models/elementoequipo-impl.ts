import { ElementoEquipo } from "./elementoequipo";

export class ElementoequipoImpl implements ElementoEquipo{
  id: string = '';
  nombre: string = '';
  peso: number = 0;
  maleta:string ='';
  cantidad: number = 1;
  urlElemento: string = '';

  constructor(){}
}

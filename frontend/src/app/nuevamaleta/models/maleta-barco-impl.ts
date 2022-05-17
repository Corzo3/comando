import { MaletaBarco } from './maleta-barco';
import { MaletaImpl } from './maletaImpl';

export class MaletaBarcoImpl extends MaletaImpl implements MaletaBarco {
  fechaRecogida: string = '';
  constructor() {
    super();
  }
}

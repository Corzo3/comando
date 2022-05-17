import { MaletaCabina } from './maleta-cabina';
import { MaletaImpl } from './maletaImpl';

export class MaletaCabinaImpl extends MaletaImpl implements MaletaCabina {
  altura: number = 0;
  anchura: number = 0;
  profundidad: number = 0;
  constructor() {
    super();
  }
}

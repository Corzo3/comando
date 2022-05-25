import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Maletabarco } from '../models/maletabarco';
import { Maletabarcoimpl } from '../models/maletabarcoimpl';

@Component({
  selector: 'app-maletasbarco',
  templateUrl: './maletasbarco.component.html',
  styleUrls: ['./maletasbarco.component.css'],
})
export class MaletasbarcoComponent implements OnInit {
  @Input() maletaBarco: Maletabarco = new Maletabarcoimpl(0, '');
  @Output() maletaBarcoSeleccionada = new EventEmitter<Maletabarco>();
  constructor() {}

  ngOnInit(): void {}

  seleccionarMaletaBarco(maletaBarco: Maletabarco): void {
    this.maletaBarcoSeleccionada.emit(maletaBarco);
  }
}

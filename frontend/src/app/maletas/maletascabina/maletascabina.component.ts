import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Maletacabina } from '../models/maletacabina';
import { Maletacabinaimpl } from '../models/maletacabinaimpl';

@Component({
  selector: 'app-maletascabina',
  templateUrl: './maletascabina.component.html',
  styleUrls: ['./maletascabina.component.css']
})
export class MaletascabinaComponent implements OnInit {

  @Input() maletaCabina: Maletacabina = new Maletacabinaimpl(0,0,0,0);
  @Output() maletaCabinaSeleccionada = new EventEmitter<Maletacabina>();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarMaletaCabina(maletaCabina: Maletacabina): void {
    this.maletaCabinaSeleccionada.emit(maletaCabina);
  }

}

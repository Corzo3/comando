import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import equipo from 'src/assets/equipo.json';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';
import { MaletaBarco } from 'src/app/nuevamaleta/models/maleta-barco';
import { Maleta } from 'src/app/nuevamaleta/models/maleta';
@Component({
  selector: 'app-maletab',
  templateUrl: './maletab.component.html',
  styleUrls: ['./maletab.component.css'],
})
export class MaletabComponent implements OnInit {
  @Input()
  maleta!: MaletaBarco;
  elementos: ElementoEquipo[] = [];
  @Output() maletaSeleccionada = new EventEmitter<Maleta>();
  constructor() {}


  ngOnInit(): void {}
  mostrarContenido() {
    alert('El contenido de la maleta es: elemento1, elemento2, elemento3');
  }
  cargarLista() {
    this.elementos = equipo;
  }

  seleccionarMaleta(maleta:Maleta):void{
    this.maletaSeleccionada.emit(maleta);
  }
}

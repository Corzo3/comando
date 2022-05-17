import { Component, OnInit } from '@angular/core';
import equipo from 'src/assets/equipo.json'
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';

@Component({
  selector: 'app-maletac',
  templateUrl: './maletac.component.html',
  styleUrls: ['./maletac.component.css']
})
export class MaletacComponent implements OnInit {

  elementos: ElementoEquipo[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  cargarLista(){
    this.elementos = equipo;
  }

}

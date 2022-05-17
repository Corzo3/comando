import { Component, OnInit } from '@angular/core';
import equipo from 'src/assets/equipo.json'
import { ElementoEquipo} from 'src/app/elementosequipo/models/elementoequipo';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  elementos: ElementoEquipo[] = [];
  constructor() { }
  creada: boolean = true;
  ngOnInit(): void {
  }

  cargarLista(){
    if (this.creada) {
      this.elementos = equipo;
    }

  }

}

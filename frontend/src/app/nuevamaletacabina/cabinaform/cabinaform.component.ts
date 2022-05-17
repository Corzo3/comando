import { Component, OnInit } from '@angular/core';
import { MaletaCabina } from 'src/app/nuevamaleta/models/maleta-cabina';

@Component({
  selector: 'app-cabinaform',
  templateUrl: './cabinaform.component.html',
  styleUrls: ['./cabinaform.component.css']
})
export class CabinaformComponent implements OnInit {
  public maletasCabina: MaletaCabina[] = [];
  maletaCabina: MaletaCabina = {
    id: '',
    altura: 0,
    anchura: 0,
    profundidad: 0,
    peso: 0,
  };
  creada = false;
  mensaje = '';

  constructor() { }

  ngOnInit(): void {
  }
  public saveMaletaCabina() {
    this.maletasCabina.push({ ...this.maletaCabina });
  }

  public avisarCreada() {
    this.creada = true;
    this.mensaje = 'Se ha creado una nueva maleta de cabina ';
  }

  borrarMensaje() {
    this.mensaje = '';
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MaletaBarco } from 'src/app/nuevamaleta/models/maleta-barco';
@Component({
  selector: 'app-barcoform',
  templateUrl: './barcoform.component.html',
  styleUrls: ['./barcoform.component.css'],
})
export class BarcoformComponent implements OnInit {

  constructor( ) {}
  public maletasBarco: MaletaBarco[] = [];
  maletaBarco: MaletaBarco = { id: '', fechaRecogida: '', peso: 0 };
  creada = false;
  mensaje = '';

  ngOnInit(): void {}
  mostrarAyuda() {
    alert(
      'La fecha que debe introducir es aproximadamente un mes antes de la fecha prevista para desplegar'
    );
  }

  public avisarCreada() {
    this.creada = true;
    this.mensaje = 'Se ha creado una nueva maleta de barco ';
  }

  borrarMensaje() {
    this.mensaje = '';
  }


}

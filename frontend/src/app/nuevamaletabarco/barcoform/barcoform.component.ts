import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Maletabarco } from 'src/app/maletas/models/maletabarco';
import { Maletabarcoimpl } from 'src/app/maletas/models/maletabarcoimpl';
import { Maletacabinaimpl } from 'src/app/maletas/models/maletacabinaimpl';
import { Maletacabina } from 'src/app/maletas/models/maletacabina';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';
import equipo from 'src/assets/equipo.json';
import { MaletaService } from 'src/app/maletas/service/maleta.service';
@Component({
  selector: 'app-barcoform',
  templateUrl: './barcoform.component.html',
  styleUrls: ['./barcoform.component.css'],
})
export class BarcoformComponent implements OnInit {

  constructor(private maletaService : MaletaService ) {}
  public maletasBarco: Maletabarco[] = [];
  maletaBarco: Maletabarcoimpl = new Maletabarcoimpl(0,'');
  maletaCabina: Maletacabina = new Maletacabinaimpl();
  creada = false;
  mensaje = '';
  formulario: number = 0;
  public elementos: ElementoEquipo[] = equipo;
  @Input() elementosSeleccionados: ElementoEquipo[] = [];
  // elementosNuevos: ElementoEquipo[] = [];
  listaCargada: boolean = false;

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
    this.maletaBarco.elementos = [];
    this.maletasBarco = [];
  }

  public guardarMaletaBarco (){
    this.maletasBarco.push({...this.maletaBarco});
  }
  public cargarLista() {
    this.listaCargada = true;
  }

  getNombreElemento(e: any, elemento: ElementoEquipo) {
    if (e.target.checked) {
      console.log(elemento.nombre + ' checked');
      this.elementosSeleccionados.push(elemento);
      this.elementosSeleccionados = this.maletaBarco.elementos
    } else {
      console.log(elemento.nombre + ' unchecked');
      this.elementosSeleccionados = this.elementosSeleccionados.filter(
        (m) => m != elemento
      );
    }

    console.log(this.elementosSeleccionados);
  }

  create(): void {
    this.maletaService.postMaletaBarco(this.maletaBarco)
  }

}

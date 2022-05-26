import { Component, Input, OnInit } from '@angular/core';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';
import { Maletabarco } from '../models/maletabarco';
import { Maletabarcoimpl } from '../models/maletabarcoimpl';
import { Maletacabina } from '../models/maletacabina';
import { Maletacabinaimpl } from '../models/maletacabinaimpl';
import { MaletaService } from '../service/maleta.service';
import equipo from 'src/assets/equipo.json';
@Component({
  selector: 'app-barco-form',
  templateUrl: './barco-form.component.html',
  styleUrls: ['./barco-form.component.css']
})
export class BarcoFormComponent implements OnInit {

  constructor(private maletaService : MaletaService ) {}
  public maletasBarco: Maletabarco[] = [];
  maletaBarco: Maletabarcoimpl = new Maletabarcoimpl(0,'');
  maletaCabina: Maletacabina = new Maletacabinaimpl(0,0,0,0);
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
  createC(): void {
    this.maletaService.postMaletaCabina(this.maletaCabina)
  }

}

import { Component, Input, OnInit, Output } from '@angular/core';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';
import { Maletabarco } from '../models/maletabarco';
import { Maletabarcoimpl } from '../models/maletabarcoimpl';
import { Maletacabina } from '../models/maletacabina';
import { Maletacabinaimpl } from '../models/maletacabinaimpl';
import { MaletaService } from '../service/maleta.service';
import { ElementoService } from 'src/app/elementosequipo/service/elemento.service';
import { ElementoequipoImpl } from 'src/app/elementosequipo/models/elementoequipo-impl';
@Component({
  selector: 'app-barco-form',
  templateUrl: './barco-form.component.html',
  styleUrls: ['./barco-form.component.css']
})
export class BarcoFormComponent implements OnInit {

  constructor(private maletaService : MaletaService, private elementoService: ElementoService ) {}
  public maletasBarco: Maletabarco[] = [];
  maletaBarco: Maletabarcoimpl = new Maletabarcoimpl(0,'');
  maletaCabina: Maletacabina = new Maletacabinaimpl(0,0,0,0);
  creada = false;
  mensaje = '';
  formulario: number = 0;
  public elementos: ElementoEquipo[] = [];
  @Input() elementosSeleccionados: ElementoEquipo[] = [];
  @Input()
  elemento: ElementoequipoImpl = new ElementoequipoImpl();

  listaCargada: boolean = true;

  ngOnInit(): void {
    this.elementoService
    .getElementos()
    .subscribe(
      (response) =>
        (this.elementos = this.elementoService.extraerElementos(response))
    );
  }

  //muestra el mensaje de ayuda al usuario para calcular la fecha que tiene que introducir
  mostrarAyuda() {
    alert(
      'La fecha que debe introducir es aproximadamente un mes antes de la fecha prevista para desplegar'
    );
  }
  public guardarMaletaBarco (){
    this.maletasBarco.push({...this.maletaBarco});
  }
  public cargarLista() {
    this.listaCargada = true;
  }

  // método para que al pulsar el checkbox se añada el elemento a la maleta de barco

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

    // console.log(this.elementosSeleccionados);
  }

   // método para que al pulsar el checkbox se añada el elemento a la maleta de cabina
  getNombreElementoC(e: any, elemento: ElementoEquipo) {
    if (e.target.checked) {
      console.log(elemento.nombre + ' checked');
      this.elementosSeleccionados.push(elemento);
      this.elementosSeleccionados = this.maletaCabina.elementos
    } else {
      console.log(elemento.nombre + ' unchecked');
      this.elementosSeleccionados = this.elementosSeleccionados.filter(
        (m) => m != elemento
      );
    }

    // console.log(this.elementosSeleccionados);
  }

  // crea una nueva maleta de barco
  create(): void {
    this.maletaService.postMaletaBarco(this.maletaBarco)
  }

  //crea una nueva maleta de cabina
  createC(): void {
    this.maletaService.postMaletaCabina(this.maletaCabina)
  }

}

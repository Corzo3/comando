import { Component, Input, OnInit, Output } from '@angular/core';
import equipo from 'src/assets/equipo.json';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';
import { Maletabarcoimpl } from '../models/maletabarcoimpl';
import { Maletacabina } from '../models/maletacabina';
import { Maletacabinaimpl } from '../models/maletacabinaimpl';
import { ElementoService } from 'src/app/elementosequipo/service/elemento.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { ElementoequipoImpl } from 'src/app/elementosequipo/models/elementoequipo-impl';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {

  elementos: ElementoEquipo[] = [];
  @Input()
  elemento: ElementoequipoImpl = new ElementoequipoImpl();
  creada: boolean = true;
  constructor(
    private elementoService: ElementoService,
    private auxService: AuxiliarService
  ) {}

  @Input() elementosSeleccionados: ElementoEquipo[] = [];
  maletaBarco: Maletabarcoimpl = new Maletabarcoimpl(0, '');
  maletaCabina: Maletacabina = new Maletacabinaimpl(0, 0, 0, 0);
  ngOnInit(): void {

  }

  cargarLista() {
    if (this.creada) {
      this.elementos = equipo;
    }
  }

  getNombreElemento(e: any, elemento: ElementoEquipo) {
    if (e.target.checked) {
      console.log(elemento.nombre + ' checked');
      this.elementosSeleccionados.push(elemento);
      this.elementosSeleccionados = this.maletaBarco.elementos;
    } else {
      console.log(elemento.nombre + ' unchecked');
      this.elementosSeleccionados = this.elementosSeleccionados.filter(
        (m) => m != elemento
      );
    }
  }

  getNombreElementoC(e: any, elemento: ElementoEquipo) {
    if (e.target.checked) {
      console.log(elemento.nombre + ' checked');
      this.elementosSeleccionados.push(elemento);
      this.elementosSeleccionados = this.maletaCabina.elementos;
    } else {
      console.log(elemento.nombre + ' unchecked');
      this.elementosSeleccionados = this.elementosSeleccionados.filter(
        (m) => m != elemento
      );
    }
  }
}

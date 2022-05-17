import { Component, Input, OnInit, Output } from '@angular/core';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';
import equipo from 'src/assets/equipo.json';
import { MaletaBarcoService } from 'src/app/nuevamaleta/service/maleta-barco-service';
import { MaletaBarco } from 'src/app/nuevamaleta/models/maleta-barco';
import { MaletaBarcoImpl } from 'src/app/nuevamaleta/models/maleta-barco-impl';
import { ElementoequipoImpl } from 'src/app/elementosequipo/models/elementoequipo-impl';

@Component({
  selector: 'app-listadomaterial',
  templateUrl: './listadomaterial.component.html',
  styleUrls: ['./listadomaterial.component.css'],
})
export class ListadomaterialComponent implements OnInit {
  public elementos: ElementoEquipo[] = equipo;
  elementosSeleccionados: ElementoEquipo[] = [];
  elementosNuevos: ElementoEquipo[] = [];
  listaCargada: boolean = false;
  constructor(
    private maletaBarcoService: MaletaBarcoService,

  ) {}

  ngOnInit(): void {
    this.elementosSeleccionados = new Array<ElementoEquipo>();
  }

  public cargarLista() {
    this.listaCargada = true;
  }

 /*  sumarCantidad(elemento: ElementoEquipo): void {
    elemento.cantidad++;
    this.maletaBarcoService.addToMaleta(elemento);
  }

  restarCantidad(elemento: ElementoEquipo): void {
    if (elemento.cantidad > 0) {
      elemento.cantidad--;
      this.maletaBarcoService.addToMaleta(elemento);
    }
  }

  verificarCantidad(elemento: ElementoEquipo) {
    if ((elemento.cantidad = 0)) {
      alert('Debe agregar al menos un elemento de este tipo');
    }
  } */

  getNombreElemento(e: any, elemento: ElementoEquipo) {
    if (e.target.checked) {
      console.log(elemento.nombre + ' checked');
      this.elementosSeleccionados.push(elemento);
    } else {
      console.log(elemento.nombre + ' unchecked');
      this.elementosSeleccionados = this.elementosSeleccionados.filter(
        (m) => m != elemento
      );
    }

    console.log(this.elementosSeleccionados);
  }

  agregarElemento(e: any, elemento: ElementoEquipo) {
    this.elementosNuevos.push(elemento);
    console.log(this.elementosNuevos);
  }
}

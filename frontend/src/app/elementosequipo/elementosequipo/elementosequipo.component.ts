import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { ElementoEquipo } from '../models/elementoequipo';
import { ElementoequipoImpl } from '../models/elementoequipo-impl';
import { ElementoService } from '../service/elemento.service';
import equipo from 'src/assets/equipo.json';
import { HttpClient } from '@angular/common/http';
import { Maletabarco } from 'src/app/maletas/models/maletabarco';
import { Maletacabina } from 'src/app/maletas/models/maletacabina';
import { MaletaService } from 'src/app/maletas/service/maleta.service';
import { Maleta } from 'src/app/maletas/models/maleta';

@Component({
  selector: 'app-elementosequipo',
  templateUrl: './elementosequipo.component.html',
  styleUrls: ['./elementosequipo.component.css'],
})
export class ElementosequipoComponent implements OnInit {
  elementos: ElementoEquipo[] = [];
  todosElementos: ElementoEquipo[] = [];
  elementoVerDatos!: ElementoEquipo;
  numPaginas: number = 0;
  listaCargada: boolean = false;
  elemento: ElementoEquipo = new ElementoequipoImpl();
  maletas: Maleta[] = [];
  maletas1: Maletacabina[] = [];

  constructor(
    private elementoService: ElementoService,
    private maletaService: MaletaService,
    private auxService: AuxiliarService
  ) {}

  ngOnInit(): void {
    this.elementoService
      .getElementos()
      .subscribe(
        (response) =>
          (this.elementos = this.elementoService.extraerElementos(response))
      );
    this.maletaService
      .getMaletasB()
      .subscribe(
        (response) =>
          (this.maletas = this.maletaService.extraerMaletasBarco(response))
      );
    this.maletaService
      .getMaletasC()
      .subscribe(
        (response) =>
          (this.maletas1 = this.maletaService.extraerMaletasCabina(response))
      );
  }

  getTodosElementos(): void {
    this.elementoService.getElementos().subscribe((r) => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index < this.numPaginas; index++) {
        this.elementoService.getElementosPagina(index).subscribe((response) => {
          this.todosElementos.push(
            ...this.elementoService.extraerElementos(response)
          );
        });
      }
    });
  }

  public cargarLista() {
    this.elementos = equipo;
    this.listaCargada = true;
  }

  create(): void {
    this.elementoService.postElemento(this.elemento);
  }

  modificarElemento(elemento: ElementoequipoImpl) {
    this.elementoService.patchElemento(elemento).subscribe();
  }
}

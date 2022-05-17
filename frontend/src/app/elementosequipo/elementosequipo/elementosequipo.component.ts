import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { ElementoEquipo } from '../models/elementoequipo';
import { ElementoequipoImpl } from '../models/elementoequipo-impl';
import { ElementoService } from '../service/elemento.service';
import equipo from 'src/assets/equipo.json';

@Component({
  selector: 'app-elementosequipo',
  templateUrl: './elementosequipo.component.html',
  styleUrls: ['./elementosequipo.component.css'],
})
export class ElementosequipoComponent implements OnInit {
  elementos: ElementoEquipo[] = [];
  todosElementos: ElementoEquipo[] = [];
  elementoVerDatos: ElementoEquipo = new ElementoequipoImpl("",0);
  numPaginas: number = 0;
  listaCargada: boolean = false;

  constructor(){}
/*   constructor(
    private elementoService: ElementoService,
    private auxService: AuxiliarService
  ) {} */

  ngOnInit(): void {}
/*   ngOnInit(): void {
    this.elementoService
      .getElementos()
      .subscribe(
        (response) =>
          (this.elementos = this.elementoService.extraerElementos(response))
      );
  } */

  /* getTodosElementos(): void {
    this.elementoService.getElementos().subscribe((r) => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index < this.numPaginas; index++) {
        this.elementoService.getElementosPagina(index).subscribe((response) => {
          this.todosElementos.push(
            ...this.elementoService.extraerElementos(response));
        });
      }
    });
  } */

  public cargarLista() {
    this.elementos = equipo;
    this.listaCargada = true;
  }
}

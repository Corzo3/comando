import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { ElementoEquipo } from '../models/elementoequipo';
import { ElementoequipoImpl } from '../models/elementoequipo-impl';
import { ElementoService } from '../service/elemento.service';
import equipo from 'src/assets/equipo.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-elementosequipo',
  templateUrl: './elementosequipo.component.html',
  styleUrls: ['./elementosequipo.component.css'],
})
export class ElementosequipoComponent implements OnInit {
/*   private urlApi = 'https://comando-app.herokuapp.com/api'
  private urlApiElementos = 'https://comando-app.herokuapp.com/api/elementos' */
  // public elementosCargados : any = null;

  elementos: ElementoEquipo[] = [];
  todosElementos: ElementoEquipo[] = [];
  elementoVerDatos!: ElementoEquipo;
  numPaginas: number = 0;
  listaCargada: boolean = false;


  constructor(
    // private httpClient : HttpClient,
    private elementoService: ElementoService,
    private auxService: AuxiliarService
  ) {}


  ngOnInit(): void{
    // this.getRespuestaApi();
     this.elementoService
      .getElementos()
      .subscribe(
        (response) =>
          (this.elementos = this.elementoService.extraerElementos(response))
      );
      this.getTodosElementos();
  }


/* private getRespuestaApi(){
  this.httpClient.get(this.urlApiElementos).subscribe(apiResult => (this.elementosCargados = apiResult));
} */

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

}

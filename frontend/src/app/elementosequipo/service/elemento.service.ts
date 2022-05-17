import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { ElementoEquipo } from '../models/elementoequipo';
import { ElementoequipoImpl } from '../models/elementoequipo-impl';

@Injectable({
  providedIn: 'root',
})
export class ElementoService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}elementos`;

  constructor(private http: HttpClient, private auxService: AuxiliarService) {}

  getElementos(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerElementos(respuestaApi: any): ElementoEquipo[] {
    const elementosEquipo: ElementoEquipo[] = [];
    respuestaApi._embedded.elementos.forEach((e: any) => {
      elementosEquipo.push(this.mapearElemento(e));
    });
    return elementosEquipo;
  }

  mapearElemento(elementoApi: any): ElementoequipoImpl {
    return new ElementoequipoImpl(elementoApi.nombre, elementoApi.peso);
  }

  create(elemento: ElementoEquipo): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, elemento).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  getElementosPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }
}

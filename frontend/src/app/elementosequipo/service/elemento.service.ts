import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { ElementoEquipo } from '../models/elementoequipo';
import { ElementoequipoImpl } from '../models/elementoequipo-impl';

@Injectable({
  providedIn: 'root',
})
export class ElementoService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}elementos?page=0&size=100`;
  private urlEndPoint1: string = `${this.host}elementos`;

  constructor(private http: HttpClient, private auxService: AuxiliarService) {}

  //trae todos los elementos cargados en la api
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

  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

  mapearElemento(elementoApi: any): ElementoequipoImpl {
    let elemento = new ElementoequipoImpl();
    elemento.id = this.getId(elementoApi._links.elemento.href);
    elemento.nombre = elementoApi.nombre;
    elemento.peso = elementoApi.peso;
    elemento.maleta = elementoApi._links.maleta.href;
    elemento.urlElemento = elementoApi._links.self.href;
    return elemento;
  }

  // crea un nuevo elemento de equipo que se añade al listado

  create(elemento: ElementoEquipo): Observable<any> {
    return this.http.post(`${this.urlEndPoint1}`, elemento).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  delete(id: string): Observable<ElementoEquipo> {
    return this.http.delete<ElementoEquipo>(`${this.urlEndPoint1}/${id}`).pipe(
      catchError((e) => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  update(elemento: ElementoEquipo): Observable<any> {
    return this.http
      .put<any>(`${this.urlEndPoint1}/${elemento.id}`, elemento)
      .pipe(
        catchError((e) => {
          if (e.status === 400) {
            return throwError(() => new Error(e));
          }
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(() => new Error(e));
        })
      );
  }

  getElemento(id: string): Observable<ElementoEquipo> {
    return this.http.get<ElementoEquipo>(`${this.urlEndPoint}/${id}`)
  }

  postElemento(elemento: ElementoequipoImpl) {
    this.http.post(this.urlEndPoint1, elemento).subscribe();
    alert('Se ha creado un nuevo elemento de equipo');
  }
  createE(elemento: ElementoequipoImpl) {
    return this.http.post(`${this.urlEndPoint1}`, elemento);
  }

  getElementosPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }

  patchElemento(elemento: ElementoequipoImpl) {
    return this.http.patch<any>(
      `${this.urlEndPoint1}/${elemento.id}`,
      elemento
    );
  }
}

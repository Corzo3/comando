import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { MaletaBarco } from '../models/maleta-barco';
import { MaletaBarcoImpl } from '../models/maleta-barco-impl';
import { Maleta } from '../models/maleta';

@Injectable({
  providedIn: 'root',
})
export class MaletaBarcoService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}maletasbarco`;

  private elementos: ElementoEquipo[] = [];
  private elementosSubjects: BehaviorSubject<ElementoEquipo[]> =
    new BehaviorSubject(this.elementos);
  public elementosMaleta: Observable<ElementoEquipo[]> =
    this.elementosSubjects.asObservable();

  constructor() {}
  // constructor(private http: HttpClient) {}

  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

 /*  getMaletasBarco(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  } */

  mapearMaletaBarco(maletaBarcoApi: any): MaletaBarco {
    let maletaBarco: MaletaBarco = new MaletaBarcoImpl();
    maletaBarco.id = this.getId(maletaBarcoApi._links.maletasbarco.href);
    maletaBarco.fechaRecogida = maletaBarcoApi.fechaRecogida;
    maletaBarco.peso = maletaBarcoApi.peso;
    return maletaBarco;
  }

   /* create(maletaBarco: MaletaBarco): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, maletaBarco).pipe(
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
  } */

  /* delete(id: string): Observable<Maleta> {
    return this.http.delete<Maleta>(`${this.urlEndPoint}/${id}`).pipe(
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
  } */

 /*  update(maleta: Maleta): Observable<any> {
    return this.http
      .put<any>(`${this.urlEndPoint}/${maleta.id}`, maleta)
      .pipe(
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
  }  */

 /*  getMaletaBarco(id: string): Observable<MaletaBarco> {
    return this.http.get<MaletaBarco>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  } */
}

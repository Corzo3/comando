import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Maletabarco } from '../models/maletabarco';
import { Maletabarcoimpl } from '../models/maletabarcoimpl';
import { Maletacabina } from '../models/maletacabina';
import { Maletacabinaimpl } from '../models/maletacabinaimpl';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';
import { ElementoequipoImpl } from 'src/app/elementosequipo/models/elementoequipo-impl';
import { Maletaimpl } from '../models/maletaimpl';
import { Maleta } from '../models/maleta';

@Injectable({
  providedIn: 'root',
})
export class MaletaService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}maletasbarco`;
  private urlEndPoint1: string = `${this.host}maletascabina`;
  private urlEndpoint2: string = `${this.host}maletas`;
  private urlFiltrar: string = `${this.host}elementos/search/por-maleta?elemento=`;

  constructor(private http: HttpClient, private auxService: AuxiliarService) {}

  //Métodos usados que fucionan, comentados los que no ,previo a borrado

  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }
  getMaletasB(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  getMaletasC(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint1);
  }

  getMaletas():Observable <any>{
    return this.http.get<any>(this.urlEndpoint2);
  }

  extraerMaletasBarco(respuestaApi: any): Maletabarco[] {
    const maletas: Maletabarco[] = [];
    respuestaApi._embedded.maletasbarco.forEach((m: any) => {
      maletas.push(this.mapearMaletaB(m));
    });
    return maletas;
  }

  extraerMaletasCabina(respuestaApi: any): Maletacabina[] {
    const maletas: Maletacabina[] = [];
    respuestaApi._embedded.maletascabina.forEach((m: any) => {
      maletas.push(this.mapearMaletaC(m));
    });
    return maletas;
  }
  extraerMaletas(respuestaApi: any): Maleta[] {
    const maletas: Maleta[] = [];
    respuestaApi._embedded.maletas.forEach((m: any) => {
      maletas.push(this.mapearMaleta(m));
    });
    return maletas;
  }

  mapearMaletaB(maletaApi: any): Maletabarcoimpl {
    let maleta = new Maletabarcoimpl(0, '');
    maleta.id = this.getId(maletaApi._links.maletabarco.href);
    maleta.pesoEnVacio = maletaApi.pesoEnVacio;
    maleta.fechaRecogida = maletaApi.fechaRecogida;
    maleta.urlMaleta = maletaApi._links.self.href;
    // maleta.elementos = maletaApi._links.elementos.href;
    return maleta;
  }

  // cambiado todo lo que ponía deprecated por lo que proponía el IDE. meto e donde pone new Error ('test')

  createMaletaB(maletaB: Maletabarco): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, maletaB).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error('test'));
      })
    );
  }

  deleteMaletaB(id: string): Observable<Maletabarco> {
    return this.http.delete<Maletabarco>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  /* updateMaletaB(maleta: Maletabarco): Observable<any> {
    return this.http
      .patch<any>(`${this.urlEndPoint}/${maleta.id}`, maleta)
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
 */
  mapearMaletaC(maletaApi: any): Maletacabinaimpl {
    let maleta = new Maletacabinaimpl(0, 0, 0, 0);
    maleta.id = this.getId(maletaApi._links.maletacabina.href);
    maleta.pesoEnVacio = maletaApi.pesoEnVacio;
    maleta.altura = maletaApi.altura;
    maleta.anchura = maletaApi.anchura;
    maleta.profundidad = maletaApi.profundidad;
    maleta.urlMaleta = maletaApi._links.self.href;
    // maleta.elementos = maletaApi._links.elementos.href;
    return maleta;
  }

  createMaletaC(maletaC: Maletacabina): Observable<any> {
    return this.http.post(`${this.urlEndPoint1}`, maletaC).pipe(
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

  deleteMaletaC(id: string): Observable<Maletacabina> {
    return this.http.delete<Maletacabina>(`${this.urlEndPoint1}/${id}`).pipe(
      catchError((e) => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  /* updateMaletaC(maleta: Maletacabina): Observable<any> {
    return this.http
      .patch<any>(`${this.urlEndPoint1}/${maleta.id}`, maleta)
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
  } */

  getMaleta(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndpoint2}/${id}`)
  }

  getMaletaC(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndpoint2}/${id}`)
  }

  postMaletaBarco(maleta: Maletabarcoimpl) {
    this.http.post(this.urlEndPoint, maleta).subscribe();
    alert('Se ha creado una nueva maleta de barco');
  }

  create(maletaBarco: Maletabarcoimpl): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, maletaBarco);
  }

  postMaletaCabina(maleta: Maletacabinaimpl) {
    this.http.post(this.urlEndPoint1, maleta).subscribe();
    alert('Se ha creado una nueva maleta de cabina');
  }

  createC(maletaCabina: Maletacabinaimpl): Observable<any> {
    return this.http.post(`${this.urlEndPoint1}`, maletaCabina);
  }

  getElementosMaletaB(idMaleta: string): Observable<any> {
    return this.http.get<any>(
      `${this.host}maletas/${idMaleta}/elementos?page=0&size=100`
    );
  }

  extraerElementosMaletaB(respuestaApi: any): any[] {
    const elementos: ElementoEquipo[] = [];
    if (respuestaApi._embedded) {
      respuestaApi._embedded.elementos.forEach((e: any) => {
        elementos.push(this.mapearElemento(e));
      });
    }
    return elementos;
  }

  mapearElemento(elementoApi: any): ElementoEquipo {
    let elemento: ElementoEquipo = new ElementoequipoImpl();
    elemento.id = this.getId(elementoApi._links.elemento.href);
    elemento.nombre = elementoApi.nombre;
    elemento.peso = elementoApi.peso;
    return elemento;
  }

  getElementosMaletaC(idMaleta: string): Observable<any> {
    return this.http.get<any>(
      `${this.host}maletascabina/${idMaleta}/elementos`
    );
  }

  extraerElementosMaletaC(respuestaApi: any): any[] {
    const elementos: ElementoEquipo[] = [];
    if (respuestaApi._embedded) {
      respuestaApi._embedded.elementos.forEach((e: any) => {
        elementos.push(this.mapearElemento(e));
      });
    }
    return elementos;
  }

  patchMaletaBarco(maleta: Maletabarcoimpl) {
    return this.http.patch<any>(`${this.urlEndPoint}/${maleta.id}`, maleta);
  }

  patchMaletaCabina(maleta: Maletacabinaimpl) {
    return this.http.patch<any>(`${this.urlEndPoint1}/${maleta.id}`, maleta);
  }

  getElementosMaletaBarco(maleta: Maletabarcoimpl) {
    return this.http.get<any>(`${this.urlEndPoint}/${maleta.id}/elementos`);
  }
  getElementosMaletaCabina(id: string) {
    return this.http.get<any>(`${this.urlEndPoint1}/${id}/elementos`);
  }

  getMaletaBarco(elemento: ElementoEquipo): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${elemento.id}/maleta`);
  }
  getMaletaCabina(elemento: ElementoEquipo): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint1}/${elemento.id}/maleta`);
  }

  getMaletaConElemento(nombre: string): Observable<any> {
    return this.http.get<any>(`${this.urlFiltrar}${nombre}`);
  }

  mapearMaleta(maletaApi: any): Maletaimpl {
    let maleta = new Maletaimpl();
    maleta.id = this.getId(maletaApi._links.maleta.href);
    maleta.pesoEnVacio = maletaApi.pesoEnVacio;
    maleta.urlMaleta = maletaApi._links.self.href;
    maleta.elementos = maletaApi._links.elementos.href;
    return maleta;
  }

extraerMaletasMetodo(respuestaApi : any): Maleta[]{
const maletas: Maleta[] = [];
respuestaApi._embedded.maletas.forEach((m:any) => {
  maletas.push(this.mapearMaleta(m))
});
return maletas;
  }


}

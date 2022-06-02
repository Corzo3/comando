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

@Injectable({
  providedIn: 'root',
})
export class MaletaService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}maletasbarco`;
  private urlEndPoint1: string = `${this.host}maletascabina`;


  constructor(private http: HttpClient, private auxService: AuxiliarService) {}

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

  mapearMaletaB(maletaApi: any): Maletabarcoimpl {
    let maleta = new Maletabarcoimpl(0, '');
    maleta.id = this.getId(maletaApi._links.maletabarco.href);
    maleta.pesoEnVacio = maletaApi.pesoEnVacio;
    maleta.fechaRecogida = maletaApi.fechaRecogida;
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

  updateMaletaB(maleta: Maletabarco): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${maleta.id}`, maleta).pipe(
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

  mapearMaletaC(maletaApi: any): Maletacabinaimpl {
    let maleta = new Maletacabinaimpl(0,0,0,0);
    maleta.id = this.getId(maletaApi._links.maletacabina.href);
    maleta.pesoEnVacio = maletaApi.pesoEnVacio;
    maleta.altura = maletaApi.altura;
    maleta.anchura = maletaApi.anchura;
    maleta.profundidad = maletaApi.profundidad;
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

  updateMaletaC(maleta: Maletacabina): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint1}/${maleta.id}`, maleta).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e))
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  getMaleta(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  postMaletaBarco(maleta: Maletabarcoimpl) {
    this.http.post(this.urlEndPoint, maleta).subscribe();
    alert('Se ha creado una nueva maleta de barco');
  }

  create(maletaBarco: Maletabarcoimpl): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, maletaBarco);
  }

  postMaletaCabina(maleta:Maletacabinaimpl){
    this.http.post(this.urlEndPoint1, maleta).subscribe();
    alert('Se ha creado una nueva maleta de cabina')
  }

  createC(maletaCabina: Maletacabinaimpl): Observable<any> {
    return this.http.post(`${this.urlEndPoint1}`, maletaCabina)
  }

  getElementosMaletaB(idMaleta: string) : Observable <any>{
    return this.http.get<any>(`${this.host}maletasbarco/${idMaleta}/elementos?page=0&size=1000`)
  }

  extraerElementosMaleta(respuestaApi: any) : ElementoEquipo[]{
    const elementos : ElementoEquipo [] = [];
    respuestaApi._embedded.maletas.elementos.forEach((e: any) => {
      elementos.push(this.mapearElemento(e));
    });
    return elementos;
  }

  mapearElemento(elementoApi:any) : ElementoEquipo{
    let elemento : ElementoEquipo = new ElementoequipoImpl();
    elemento.nombre = elementoApi.nombre;
    elemento.peso = elementoApi.peso;
    return elemento;
  }

  getElementosMaletaC(idMaleta: string) : Observable <any>{
    return this.http.get<any>(`${this.host}maletascabina/${idMaleta}/elementos?page=0&size=1000`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Maletabarco } from '../models/maletabarco';
import { Maletabarcoimpl } from '../models/maletabarcoimpl';
import { Maletacabina } from '../models/maletacabina';
import { Maletacabinaimpl } from '../models/maletacabinaimpl';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';

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

  createMaletaB(maletaB: Maletabarco): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, maletaB).pipe(
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

  deleteMaletaB(id: string): Observable<Maletabarco> {
    return this.http.delete<Maletabarco>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  updateMaletaB(maleta: Maletabarco): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${maleta.id}`, maleta).pipe(
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
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  deleteMaletaC(id: string): Observable<Maletacabina> {
    return this.http.delete<Maletacabina>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  updateMaletaC(maleta: Maletacabina): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${maleta.id}`, maleta).pipe(
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

  getMaleta(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
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
}

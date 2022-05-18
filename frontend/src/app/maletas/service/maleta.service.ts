import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Maleta } from 'src/app/nuevamaleta/models/maleta';
import { MaletaBarco } from 'src/app/nuevamaleta/models/maleta-barco';
import { MaletaBarcoImpl } from 'src/app/nuevamaleta/models/maleta-barco-impl';
import { MaletaCabina } from 'src/app/nuevamaleta/models/maleta-cabina';
import { MaletaImpl } from 'src/app/nuevamaleta/models/maletaImpl';
import { Maletacabina } from 'src/app/nuevamaletacabina/models/maletacabina';
import { MaletaCabinaImpl } from 'src/app/nuevamaleta/models/maleta-cabina-impl';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MaletaService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}maletas`;
  constructor(private http: HttpClient, private auxService: AuxiliarService) {}

  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }
  getMaletas(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerMaletasBarco(respuestaApi: any): MaletaBarco[] {
    const maletas: MaletaBarco[] = [];
    respuestaApi._embedded.maletasbarco.forEach((m: any) => {
      maletas.push(this.mapearMaletaB(m));
    });
    return maletas;
  }

  extraerMaletasCabina(respuestaApi: any): Maletacabina[] {
    const maletas: MaletaCabina[] = [];
    respuestaApi._embedded.maletasbarco.forEach((m: any) => {
      maletas.push(this.mapearMaletaC(m));
    });
    return maletas;
  }

  mapearMaletaB(maletaApi: any): MaletaBarcoImpl {
    let maleta = new MaletaBarcoImpl();
    maleta.id = this.getId(maletaApi._links.elemento.href);
    maleta.peso = maletaApi.pesoEnVacio;
    maleta.fechaRecogida = maletaApi.fechaRecogida;
    return maleta;
  }

  mapearMaletaC(maletaApi: any): MaletaCabinaImpl {
    let maleta = new MaletaCabinaImpl();
    maleta.id = this.getId(maletaApi._links.elemento.href);
    maleta.peso = maletaApi.pesoEnVacio;
    maleta.altura = maletaApi.altura;
    maleta.anchura= maletaApi.anchura
    maleta.profundidad= maletaApi.profundidad
    return maleta;
  }

  createMaletaB(maletaB: MaletaBarco): Observable<any> {
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

  createMaletaC(maletaC: MaletaCabina): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, maletaC).pipe(
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

  deleteMaletaB(id: string): Observable<MaletaBarco> {
    return this.http
      .delete<MaletaBarco>(`${this.urlEndPoint}/${id}`)
      .pipe(
        catchError((e) => {
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        })
      );
  }

  deleteMaletaC(id: string): Observable<Maletacabina> {
    return this.http
      .delete<Maletacabina>(`${this.urlEndPoint}/${id}`)
      .pipe(
        catchError((e) => {
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        })
      );
  }

  updateMaletaB(maleta: MaletaBarco): Observable<any> {
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
  }

  updateMaletaC(maleta: MaletaCabina): Observable<any> {
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

}

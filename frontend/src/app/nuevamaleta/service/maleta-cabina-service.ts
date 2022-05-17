import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ElementoEquipo } from '../models/elemento';
import { MaletaCabina } from '../models/maleta-cabina';
import { MaletaCabinaImpl } from '../models/maleta-cabina-impl';

@Injectable({
  providedIn: 'root',
})
export class MaletaCabinaService {
  private elementos: ElementoEquipo[] = [];
  private elementosSubjects: BehaviorSubject<ElementoEquipo[]> =
    new BehaviorSubject(this.elementos);
  public elementosMaleta: Observable<ElementoEquipo[]> =
    this.elementosSubjects.asObservable();

  constructor() {}

  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

  addToMaleta(elemento: ElementoEquipo) {
    let indice = this.elementos.findIndex((e) => e.nombre === elemento.nombre);
    if (indice === -1) this.elementos.push(elemento);
    else this.elementos[indice].cantidad = elemento.cantidad;
    if (elemento.cantidad == 0) {
      this.elementos.splice(indice, 1);
    }
  }

  mapearMaletaCabina(maletaCabinaApi : any) : MaletaCabina{
    let maletaCabina : MaletaCabina = new MaletaCabinaImpl();
    maletaCabina.id = this.getId(maletaCabinaApi._links.maletascabina.href)
    maletaCabina.altura = maletaCabinaApi.altura;
    maletaCabina.anchura = maletaCabinaApi.anchura;
    maletaCabina.profundidad = maletaCabinaApi.profundidad;
    maletaCabina.peso = maletaCabinaApi.peso;
    return maletaCabina;
  }
}


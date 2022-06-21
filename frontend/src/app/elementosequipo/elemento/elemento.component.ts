import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maletabarco } from 'src/app/maletas/models/maletabarco';
import { Maletabarcoimpl } from 'src/app/maletas/models/maletabarcoimpl';
import { MaletaService } from 'src/app/maletas/service/maleta.service';
import { ElementoEquipo } from '../models/elementoequipo';
import { ElementoService } from '../service/elemento.service';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.css'],
})
export class ElementoComponent implements OnInit {
  @Input() elementos: ElementoEquipo[] = [];
  // @Input() maletaBarco: Maletabarco = new Maletabarcoimpl(0, '');

  constructor(
    private activateRoute: ActivatedRoute,
    private maletaService: MaletaService,
    private elementoService: ElementoService
  ) {}

  ngOnInit(): void {
    this.maletaService
      .getElementosMaletaB(this.activateRoute.snapshot.params['id'])
      .subscribe(
        (response) =>
          (this.elementos =
            this.maletaService.extraerElementosMaletaB(response))
      );

     this.maletaService
      .getElementosMaletaC(this.activateRoute.snapshot.params['id'])
      .subscribe(
        (response) =>
          (this.elementos =
            this.maletaService.extraerElementosMaletaC(response))
      );
  }

  sumarPeso() {
    let pesoTotal = 0;
    for (const elemento of this.elementos) {
      pesoTotal += elemento.peso;
    }
    return pesoTotal;
  }

  extraerNombres(elementos: ElementoEquipo[]) {
    var arrayNombres: string[] = [];
    elementos.forEach((elemento) => {
      arrayNombres.push(elemento.nombre + " (" + elemento.peso + " kg)");
    });
    return arrayNombres;
  }

  contarOcurrencias(nombres: any[]) {
    if (!Array.isArray(nombres)) {
      throw TypeError('El argumento debe ser un array');
    }
    return(nombres.reduce((a, d) => (a[d] ? (a[d] += 1) : (a[d] = 1), a), {})) ;
  }

  mostrarElementos(){
    var elementosExtraidos = this.contarOcurrencias(this.extraerNombres(this.elementos))
    return elementosExtraidos;
  }

}

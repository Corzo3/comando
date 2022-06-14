import { Component, OnInit } from '@angular/core';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';
import { Maleta } from '../models/maleta';
import { Maletabarco } from '../models/maletabarco';
import { Maletabarcoimpl } from '../models/maletabarcoimpl';
import { Maletacabina } from '../models/maletacabina';
import { Maletacabinaimpl } from '../models/maletacabinaimpl';
import { MaletaService } from '../service/maleta.service';

@Component({
  selector: 'app-filtrado',
  templateUrl: './filtrado.component.html',
  styleUrls: ['./filtrado.component.css']
})
export class FiltradoComponent implements OnInit {
  maletas: Maleta[]= [];
  maletasBarco: Maletabarco[] = [];
  maletasCabina: Maletacabina[] = [];
  maletaBarco!: Maletabarco;
  maletaCabina!:Maletacabina;
  elementos: ElementoEquipo[] = [];
  nombreBuscado: string = ''
  maletaBarcoVerDatos = new Maletabarcoimpl(0, '');
  maletaCabinaVerDatos = new Maletacabinaimpl(0, 0, 0, 0);

  constructor(private maletaService: MaletaService) { }

  ngOnInit(): void {
  }

  buscarMaletasConElemento(nombre: string){
    this.maletaService.getMaletaConElemento(nombre).subscribe((response)=> {
      /* this.maletasBarco = this.maletaService.extraerMaletasBarco(response);
      this.maletasCabina = this.maletaService.extraerMaletasCabina(response); */
      this.maletas = this.maletaService.extraerMaletasMetodo(response);
      console.log("paso por metodo personalizado componente")

    })
  }

  verDatos(maletaBarco: Maletabarco): void {
    this.maletaBarcoVerDatos = maletaBarco;
  }

  verDatosC(maletaCabina: Maletacabina): void {
    this.maletaCabinaVerDatos = maletaCabina;
  }



}

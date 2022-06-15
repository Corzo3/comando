import { Component, Input, OnInit } from '@angular/core';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';
import { Maleta } from '../models/maleta';
import { Maletabarco } from '../models/maletabarco';
import { Maletabarcoimpl } from '../models/maletabarcoimpl';
import { Maletacabina } from '../models/maletacabina';
import { Maletacabinaimpl } from '../models/maletacabinaimpl';
import { Maletaimpl } from '../models/maletaimpl';
import { MaletaService } from '../service/maleta.service';

@Component({
  selector: 'app-filtrado',
  templateUrl: './filtrado.component.html',
  styleUrls: ['./filtrado.component.css']
})
export class FiltradoComponent implements OnInit {
  @Input() maleta: Maleta = new Maletaimpl();
  maletas: Maleta[]= [];
  elementos: ElementoEquipo[] = [];
  nombreBuscado: string = ''
  maletaBarcoVerDatos = new Maletabarcoimpl(0, '');
  maletaCabinaVerDatos = new Maletacabinaimpl(0, 0, 0, 0);

  constructor(private maletaService: MaletaService) { }

  ngOnInit(): void {
  }

  buscarMaletasConElemento(nombre: string){
    this.maletaService.getMaletaConElemento(nombre).subscribe((response)=> {
      this.maletas = this.maletaService.extraerMaletasMetodo(response);
      console.log("paso por metodo personalizado componente")

    })
  }





}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Maletabarco } from '../models/maletabarco';
import { Maletabarcoimpl } from '../models/maletabarcoimpl';
import { Maletacabina } from '../models/maletacabina';
import { Maletacabinaimpl } from '../models/maletacabinaimpl';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import {MaletaService } from '../service/maleta.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-maletas',
  templateUrl: './maletas.component.html',
  styleUrls: ['./maletas.component.css'],
})
export class MaletasComponent implements OnInit {

  private urlApiMaletasBarco = 'https://comando-app.herokuapp.com/api/maletasbarco'
  private urlApiMaletasCabina = 'https://comando-app.herokuapp.com/api/maletascabina'
  maletasCargadas : Maletabarco[] = [];
  maletasCargadas1: Maletacabina[] = [];
  maletasBarco: Maletabarco[] = [];
  maletasCabina: Maletacabina[] = [];

  maletaBarcoVerDatos = new Maletabarcoimpl(0,'');
  maletaCabinaVerDatos = new Maletacabinaimpl(0,0,0,0);

  constructor(private maletaService : MaletaService, private router : Router) {}
  // constructor(private httpClient: HttpClient) {}

   ngOnInit(): void {
    this.maletaService.getMaletasB().subscribe((response) => this.maletasBarco = this.maletaService.extraerMaletasBarco(response));
    this.maletaService.getMaletasC().subscribe((response) => this.maletasCabina = this.maletaService.extraerMaletasCabina(response));
  }
   /* ngOnInit(): void {
    this.httpClient.get(this.urlApiMaletasBarco).subscribe(apiResult => (this.maletasCargadas = apiResult));
    this.httpClient.get(this.urlApiMaletasCabina).subscribe(apiResult=> (this.maletasCargadas1 = apiResult));
  } */

  verDatos(maletaBarco: Maletabarco) : void {
    this.maletaBarcoVerDatos = maletaBarco;
    this.router.navigate([`maletas/maletabarco/${maletaBarco.id}`]);

  }

  verDatosC(maletaCabina: Maletacabina) : void {
    this.maletaCabinaVerDatos = maletaCabina;
    this.router.navigate([`maletas/maletabarco/${maletaCabina.id}`]);

  }

  registrarMaletaBarco() {
    this.router.navigate([`maletas/barco-form`])
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Maletabarco } from '../models/maletabarco';
import { Maletabarcoimpl } from '../models/maletabarcoimpl';
import { Maletacabina } from '../models/maletacabina';
import { Maletacabinaimpl } from '../models/maletacabinaimpl';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import {MaletaService } from '../service/maleta.service';


@Component({
  selector: 'app-maletas',
  templateUrl: './maletas.component.html',
  styleUrls: ['./maletas.component.css'],
})
export class MaletasComponent implements OnInit {

  private urlApiMaletasBarco = 'https://comando-app.herokuapp.com/api/maletasbarco'
  private urlApiMaletasCabina = 'https://comando-app.herokuapp.com/api/maletascabina'
  public maletasCargadas : any = null;
  public maletasCargadas1: any = null;
  maletasBarco: Maletabarco[] = [];
  maletasCabina: Maletacabina[] = [];
  maletaBarco = new Maletabarcoimpl();
  maletaCabina = new Maletacabinaimpl();
  //constructor(private maletaService : MaletaService, private auxService : AuxiliarService) {}
  constructor(private httpClient: HttpClient) {}

  /* ngOnInit(): void {
    this.maletaService.getMaletas().subscribe((response) => this.maletasBarco = this.maletaService.extraerMaletasBarco(response));
  } */
   ngOnInit(): void {
    this.httpClient.get(this.urlApiMaletasBarco).subscribe(apiResult => (this.maletasCargadas = apiResult));
    this.httpClient.get(this.urlApiMaletasCabina).subscribe(apiResult=> (this.maletasCargadas1 = apiResult));
  }

}

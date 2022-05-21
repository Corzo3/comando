import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { MaletaBarco } from 'src/app/nuevamaleta/models/maleta-barco';
import { MaletaBarcoImpl } from 'src/app/nuevamaleta/models/maleta-barco-impl';
import { MaletaCabina } from 'src/app/nuevamaleta/models/maleta-cabina';
import { MaletaCabinaImpl } from 'src/app/nuevamaleta/models/maleta-cabina-impl';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { MaletaService } from '../service/maleta.service';


@Component({
  selector: 'app-maletas',
  templateUrl: './maletas.component.html',
  styleUrls: ['./maletas.component.css'],
})
export class MaletasComponent implements OnInit {

  private urlApiMaletas = 'https://comando-app.herokuapp.com/api/maletas'
  public maletasCargadas : any = null;
  maletasBarco: MaletaBarco[] = [];
  maletasCabina: MaletaCabina[] = [];
  maletaBarco = new MaletaBarcoImpl();
  maletaCabina = new MaletaCabinaImpl();
  //constructor(private maletaService : MaletaService, private auxService : AuxiliarService) {}
  constructor(private httpClient: HttpClient) {}

  /* ngOnInit(): void {
    this.maletaService.getMaletas().subscribe((response) => this.maletasBarco = this.maletaService.extraerMaletasBarco(response));
  } */
   ngOnInit(): void {
    this.httpClient.get(this.urlApiMaletas).subscribe(apiResult => (this.maletasCargadas = apiResult));
  }

}

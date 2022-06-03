import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Maletabarco } from '../models/maletabarco';
import { Maletabarcoimpl } from '../models/maletabarcoimpl';
import { Maletacabina } from '../models/maletacabina';
import { Maletacabinaimpl } from '../models/maletacabinaimpl';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import {MaletaService } from '../service/maleta.service';
import { Router } from '@angular/router';
import { ElementoService } from 'src/app/elementosequipo/service/elemento.service';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';


@Component({
  selector: 'app-maletas',
  templateUrl: './maletas.component.html',
  styleUrls: ['./maletas.component.css'],
})
export class MaletasComponent implements OnInit {

  maletasCargadas : Maletabarco[] = [];
  maletasCargadas1: Maletacabina[] = [];
  maletasBarco: Maletabarco[] = [];
  maletasCabina: Maletacabina[] = [];
  elementos : ElementoEquipo[] = [];

  maletaBarcoVerDatos = new Maletabarcoimpl(0,'');
  maletaCabinaVerDatos = new Maletacabinaimpl(0,0,0,0);

  constructor(private maletaService : MaletaService, private router : Router, private elementoService: ElementoService) {}


   ngOnInit(): void {
    this.maletaService.getMaletasB().subscribe((response) => this.maletasBarco = this.maletaService.extraerMaletasBarco(response));
    this.maletaService.getMaletasC().subscribe((response) => this.maletasCabina = this.maletaService.extraerMaletasCabina(response));
    this.elementoService.getElementos().subscribe((response) => this.elementos = this.elementoService.extraerElementos(response));

  }

  verDatos(maletaBarco: Maletabarco) : void {
    this.maletaBarcoVerDatos = maletaBarco;
    this.router.navigate([`maletasbarco/${maletaBarco.id}`]);

  }

  verDatosC(maletaCabina: Maletacabina) : void {
    this.maletaCabinaVerDatos = maletaCabina;
    this.router.navigate([`maletascabina/${maletaCabina.id}`]);

  }

  registrarMaletaBarco() {
    this.router.navigate([`maletas/barco-form`])
  }

  onMaletaBarcoEliminar(maleta : Maletabarco){
    this.maletaService.deleteMaletaB(maleta.id).subscribe(response => {
      this.router.navigate(['maletas']);
      this.maletasBarco = this.maletasBarco.filter(m => maleta !== m)
      location.reload;
    });
  }
  onMaletaCabinaEliminar(maleta : Maletacabina){
    this.maletaService.deleteMaletaC(maleta.id).subscribe(response => {
      this.router.navigate(['maletas']);
      this.maletasCabina = this.maletasCabina.filter(m => maleta !== m)
      location.reload;
    });
  }

  onMaletaBarcoEditar(maleta: Maletabarco){
    let url = `maletas/barco-form/${maleta.id}`;
    this.router.navigate([url])
  }

}

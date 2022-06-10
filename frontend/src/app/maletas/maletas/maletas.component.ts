import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Maletabarco } from '../models/maletabarco';
import { Maletabarcoimpl } from '../models/maletabarcoimpl';
import { Maletacabina } from '../models/maletacabina';
import { Maletacabinaimpl } from '../models/maletacabinaimpl';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { MaletaService } from '../service/maleta.service';
import { Router } from '@angular/router';
import { ElementoService } from 'src/app/elementosequipo/service/elemento.service';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';

@Component({
  selector: 'app-maletas',
  templateUrl: './maletas.component.html',
  styleUrls: ['./maletas.component.css'],
})
export class MaletasComponent implements OnInit {
  @Input() maletaBarco: Maletabarco = new Maletabarcoimpl(0, '');
  @Output() maletaBarcoSeleccionada = new EventEmitter<Maletabarco>();
  @Input() maletaCabina: Maletacabina = new Maletacabinaimpl(0, 0, 0, 0);
  @Output() maletaCabinaSeleccionada = new EventEmitter<Maletacabina>();
  @Output() maletaCabinaEditar = new EventEmitter<Maletacabina>();
  maletasBarco: Maletabarco[] = [];
  maletasCabina: Maletacabina[] = [];
  elementos: ElementoEquipo[] = [];

  maletaBarcoVerDatos = new Maletabarcoimpl(0, '');
  maletaCabinaVerDatos = new Maletacabinaimpl(0, 0, 0, 0);

  constructor(
    private maletaService: MaletaService,
    private router: Router,
    private elementoService: ElementoService
  ) {}

  ngOnInit(): void {
    this.maletaService
      .getMaletasB()
      .subscribe(
        (response) =>
          (this.maletasBarco = this.maletaService.extraerMaletasBarco(response))
      );
    this.maletaService
      .getMaletasC()
      .subscribe(
        (response) =>
          (this.maletasCabina =
            this.maletaService.extraerMaletasCabina(response))
      );
    this.elementoService
      .getElementos()
      .subscribe(
        (response) =>
          (this.elementos = this.elementoService.extraerElementos(response))
      );
  }

  verDatos(maletaBarco: Maletabarco): void {
    this.maletaBarcoVerDatos = maletaBarco;
    this.router.navigate([`maletabarco/${maletaBarco.id}`]);
  }

  verDatosC(maletaCabina: Maletacabina): void {
    this.maletaCabinaVerDatos = maletaCabina;
    this.router.navigate([`maletacabina/${maletaCabina.id}`]);
  }

  registrarMaletaBarco() {
    this.router.navigate([`maletas/barco-form`]);
  }

  onMaletaBarcoEliminar(maleta: Maletabarco) {
    this.maletaService.deleteMaletaB(maleta.id).subscribe((response) => {
      this.router.navigate(['maletas']);
      this.maletasBarco = this.maletasBarco.filter((m) => maleta !== m);
      location.reload;
    });
  }
  onMaletaCabinaEliminar(maleta: Maletacabina) {
    this.maletaService.deleteMaletaC(maleta.id).subscribe((response) => {
      this.router.navigate(['maletas']);
      this.maletasCabina = this.maletasCabina.filter((m) => maleta !== m);
      location.reload;
    });
  }
  editar(): void {
    this.maletaCabinaEditar.emit(this.maletaCabina);
  }
  modificarMaletaCabina(maleta: Maletacabinaimpl) {
    this.maletaService.patchMaletaCabina(maleta).subscribe();
  }
  modificarMaletaBarco(maleta: Maletabarcoimpl){
    this.maletaService.patchMaletaBarco(maleta).subscribe();
  }
}

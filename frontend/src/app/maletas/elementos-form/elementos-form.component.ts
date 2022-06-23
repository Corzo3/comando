import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';
import { ElementoequipoImpl } from 'src/app/elementosequipo/models/elementoequipo-impl';
import { ElementoService } from 'src/app/elementosequipo/service/elemento.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Maleta } from '../models/maleta';
import { Maletabarco } from '../models/maletabarco';
import { Maletabarcoimpl } from '../models/maletabarcoimpl';
import { Maletacabina } from '../models/maletacabina';
import { Maletacabinaimpl } from '../models/maletacabinaimpl';
import { MaletaService } from '../service/maleta.service';

@Component({
  selector: 'app-elementos-form',
  templateUrl: './elementos-form.component.html',
  styleUrls: ['./elementos-form.component.css']
})
export class ElementosFormComponent implements OnInit {
  @Input() maletaBarco: Maletabarco = new Maletabarcoimpl(0, '');
  @Input() maletaCabina: Maletacabina = new Maletacabinaimpl(0, 0, 0, 0);
  @Output() elementoCrear = new EventEmitter<ElementoEquipo>()
  elementos: ElementoEquipo[] = [];
  maletas: Maleta[] = [];
  maletas1: Maletacabina[] = [];
  elemento: ElementoEquipo = new ElementoequipoImpl();
  id: string = this.cargarMaletaBarco();
  host: string = environment.host;

  constructor(
    private activateRoute: ActivatedRoute,
    private elementoService: ElementoService,
    private maletaService: MaletaService,
    private router: Router,
    private auxService: AuxiliarService) { }

  ngOnInit(): void {

    this.maletaService.getMaleta(this.id).subscribe((response) => {
      this.maletaBarco = this.maletaService.mapearMaletaB(response);
    });
    /* this.elementoService
      .getElementos()
      .subscribe(
        (response) =>
          (this.elementos = this.elementoService.extraerElementos(response))
      ); */
  }

  cargarMaletaBarco(): string {
    const idBarraNavegacion: string = this.activateRoute.snapshot.params['id'];
    return idBarraNavegacion;
  }

  cargarMaletaCabina(): string {
    const idBarraNavegacion: string = this.activateRoute.snapshot.params['id'];
    return idBarraNavegacion;
  }

  create(): void {
  this.elementoCrear.emit(this.elemento)
  this.elemento.maleta = `${this.host}maletas/${this.id}`
  this.elementoService.postElemento(this.elemento).subscribe();
  }

}

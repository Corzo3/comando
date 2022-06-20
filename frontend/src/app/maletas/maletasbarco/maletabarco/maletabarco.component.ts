import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';
import { EventEmitter } from '@angular/core';
import { Maletabarco } from '../../models/maletabarco';
import { Maletabarcoimpl } from '../../models/maletabarcoimpl';
import { MaletaService } from '../../service/maleta.service';
import { ElementoService } from 'src/app/elementosequipo/service/elemento.service';
import { Maletacabina } from '../../models/maletacabina';

@Component({
  selector: 'app-maletabarco',
  templateUrl: './maletabarco.component.html',
  styleUrls: ['./maletabarco.component.css'],
})
export class MaletabarcoComponent implements OnInit {
  @Input() maletaBarco: Maletabarco = new Maletabarcoimpl(0, '');
  @Input() elementosCargados: ElementoEquipo[] = [];
  @Output() maletaBarcoSeleccionada = new EventEmitter<Maletabarco>();
  @Output() maletaBarcoEliminar = new EventEmitter<Maletabarco>();
  maletaBarcoVerDatos = new Maletabarcoimpl(0, '');
  elementos: ElementoEquipo[] = [];
  maletasBarco: Maletabarco[] = [];
  maletasCabina: Maletacabina[] = [];
  constructor(
    private activateRoute: ActivatedRoute,
    private maletaService: MaletaService,
    private elementoService: ElementoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id: string = this.cargarMaletaBarco();
    this.maletaService.getMaleta(id).subscribe((response) => {
      this.maletaBarco = this.maletaService.mapearMaletaB(response);
    });
    this.elementoService.getElementos().subscribe((response) => {
      this.elementos = this.elementoService.extraerElementos(response);
    });
  }

  cargarMaletaBarco(): string {
    const idBarraNavegacion: string = this.activateRoute.snapshot.params['id'];
    return idBarraNavegacion;
  }

  modificarMaletaBarco(maleta: Maletabarcoimpl) {
    this.maletaService.patchMaletaBarco(maleta).subscribe();
  }

  verDatos(maletaBarco: Maletabarco): void {
    this.maletaBarcoVerDatos = maletaBarco;
  }
  avisar() {
    alert(
      'Se le va a redirigir al listado de maletas para eliminarla, ¿Desea continuar?'
    );
  }

  sumarPesos() {
    let pesoTotal = this.maletaBarco.pesoEnVacio;
    for (const elemento of this.elementosCargados) {
      pesoTotal += 3;
    }
    console.log('Peso total = ' + pesoTotal);
  }
}

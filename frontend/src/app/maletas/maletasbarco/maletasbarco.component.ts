import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';
import { ElementoService } from 'src/app/elementosequipo/service/elemento.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Maletabarco } from '../models/maletabarco';
import { Maletabarcoimpl } from '../models/maletabarcoimpl';
import { Maletacabina } from '../models/maletacabina';
import { Maletacabinaimpl } from '../models/maletacabinaimpl';
import { MaletaService } from '../service/maleta.service';

@Component({
  selector: 'app-maletasbarco',
  templateUrl: './maletasbarco.component.html',
  styleUrls: ['./maletasbarco.component.css'],
})
export class MaletasbarcoComponent implements OnInit {
  @Input() maletaBarco: Maletabarco = new Maletabarcoimpl(0, '');
  @Output() maletaBarcoSeleccionada = new EventEmitter<Maletabarco>();
  @Output() maletaBarcoEliminar = new EventEmitter<Maletabarco>();
  @Output() maletaBarcoEditar = new EventEmitter<Maletabarco>();

  constructor(
    private maletaService: MaletaService,
    auxService: AuxiliarService, private router: Router,
    private activateRoute: ActivatedRoute,
    private elementoService: ElementoService
  ) {}

  ngOnInit(): void {

  }

  cargarMaletaBarco():string{
    const idBarraNavegacion : string = this.activateRoute.snapshot.params['id'];
    return idBarraNavegacion;
  }

  seleccionarMaletaBarco(maletaBarco: Maletabarco): void {
    this.maletaBarcoSeleccionada.emit(maletaBarco);
  }

  eliminar(): void{
    if (confirm('¿Está seguro?')){
      this.maletaBarcoEliminar.emit(this.maletaBarco);
    }
  }

  editar(): void {
    this.maletaBarcoEditar.emit(this.maletaBarco);
  }

  modificarMaletaBarco(maleta: Maletabarcoimpl){
    this.maletaService.patchMaletaBarco(maleta).subscribe();
  }



}

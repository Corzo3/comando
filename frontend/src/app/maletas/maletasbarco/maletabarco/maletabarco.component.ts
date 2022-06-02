import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';
import { EventEmitter } from '@angular/core';
import { Maletabarco } from '../../models/maletabarco';
import { Maletabarcoimpl } from '../../models/maletabarcoimpl';
import { MaletaService } from '../../service/maleta.service';

@Component({
  selector: 'app-maletabarco',
  templateUrl: './maletabarco.component.html',
  styleUrls: ['./maletabarco.component.css'],
})
export class MaletabarcoComponent implements OnInit {
  @Input() maletaBarco: Maletabarco = new Maletabarcoimpl(0, '');
  elementos: ElementoEquipo[] = [];
  @Output() maletaBarcoEliminar = new EventEmitter<Maletabarco>();
  @Output() maletaBarcoEditar = new EventEmitter<Maletabarco>();
  @Output() maletaBarcoSeleccionada = new EventEmitter<Maletabarco>();


  constructor(
    private maletaService: MaletaService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id: string = this.cargarMaletaBarco();
    this.maletaService.getMaleta(id).subscribe((response) => {
      this.maletaBarco = this.maletaService.mapearMaletaB(response);
    });
  }

  cargarMaletaBarco(): string {
    const idBarraNavegacion: string = this.activateRoute.snapshot.params['id'];
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

}

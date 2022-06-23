import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maletacabina } from '../models/maletacabina';
import { Maletacabinaimpl } from '../models/maletacabinaimpl';
import { MaletaService } from '../service/maleta.service';

@Component({
  selector: 'app-maletascabina',
  templateUrl: './maletascabina.component.html',
  styleUrls: ['./maletascabina.component.css'],
})
export class MaletascabinaComponent implements OnInit {
  @Input() maletaCabina: Maletacabina = new Maletacabinaimpl(0, 0, 0, 0);
  @Output() maletaCabinaSeleccionada = new EventEmitter<Maletacabina>();
  @Output() maletaCabinaEliminar = new EventEmitter<Maletacabina>();
  @Output() maletaCabinaEditar = new EventEmitter<Maletacabina>();

  constructor(private maletaService: MaletaService, private activateRoute: ActivatedRoute,) {}

  ngOnInit(): void {}

  cargarMaletaCabina():string{
    const idBarraNavegacion : string = this.activateRoute.snapshot.params['id'];
    return idBarraNavegacion;
  }

  seleccionarMaletaCabina(maletaCabina: Maletacabina): void {
    this.maletaCabinaSeleccionada.emit(maletaCabina);
  }

  eliminar(): void {
      this.maletaCabinaEliminar.emit(this.maletaCabina);
  }

  editar(): void {
    this.maletaCabinaEditar.emit(this.maletaCabina);
  }

  modificarMaletaCabina(maleta: Maletacabinaimpl){
    this.maletaService.patchMaletaCabina(maleta).subscribe();
  }



}

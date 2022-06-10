import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';
import { ElementoService } from 'src/app/elementosequipo/service/elemento.service';
import { Maletacabina } from '../../models/maletacabina';
import { Maletacabinaimpl } from '../../models/maletacabinaimpl';
import { MaletaService } from '../../service/maleta.service';

@Component({
  selector: 'app-maletacabina',
  templateUrl: './maletacabina.component.html',
  styleUrls: ['./maletacabina.component.css'],
})
export class MaletacabinaComponent implements OnInit {
  @Input() maletaCabina: Maletacabina = new Maletacabinaimpl(0, 0, 0, 0);
  elementos: ElementoEquipo[] = [];
  @Output() maletaCabinaSeleccionada = new EventEmitter<Maletacabina>();
  @Output() maletaCabinaEditar = new EventEmitter<Maletacabina>();
  maletaCabinaVerDatos = new Maletacabinaimpl(0, 0, 0, 0);
  constructor(
    private activateRoute: ActivatedRoute,
    private maletaService: MaletaService,
    private elementoService: ElementoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id: string = this.cargarMaletaCabina();
    this.maletaService.getMaletaC(id).subscribe((response) => {
      this.maletaCabina = this.maletaService.mapearMaletaC(response);
    });
    this.elementoService.getElementos().subscribe((response) => {
      this.elementos = this.elementoService.extraerElementos(response);
    });
  }

  cargarMaletaCabina(): string {
    const idBarraNavegacion: string = this.activateRoute.snapshot.params['id'];
    return idBarraNavegacion;
  }
}

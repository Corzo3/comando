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
  elementos : ElementoEquipo[] = [];
 @Input() maletaBarco: Maletabarco = new Maletabarcoimpl(0, '');

  constructor(
    private activateRoute: ActivatedRoute, private maletaService : MaletaService
  ) {}

  ngOnInit(): void {

  }

  cargarMaletaBarco(): string {
    const idBarraNavegacion: string = this.activateRoute.snapshot.params['id'];
    return idBarraNavegacion;
  }
}

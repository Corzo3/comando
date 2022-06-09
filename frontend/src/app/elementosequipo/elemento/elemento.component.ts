import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maletabarco } from 'src/app/maletas/models/maletabarco';
import { Maletabarcoimpl } from 'src/app/maletas/models/maletabarcoimpl';
import { MaletaService } from 'src/app/maletas/service/maleta.service';
import { ElementoEquipo } from '../models/elementoequipo';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.css']
})
export class ElementoComponent implements OnInit {
  elementos : ElementoEquipo[] = [];
  @Input() maletaBarco: Maletabarco = new Maletabarcoimpl(0, '');

  constructor(private activateRoute: ActivatedRoute, private maletaService : MaletaService) { }

  ngOnInit(): void {
    this.maletaService.getElementosMaletaBarco(this.activateRoute.snapshot.params['id']).subscribe((response) => this.elementos = this.maletaService.extraerElementosMaletaB(response));
    this.maletaService.getElementosMaletaCabina(this.activateRoute.snapshot.params['id']).subscribe((response) => this.elementos = this.maletaService.extraerElementosMaletaC(response));
  }

}

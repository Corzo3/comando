import { Component, OnInit } from '@angular/core';
import { MaletaBarco } from 'src/app/nuevamaleta/models/maleta-barco';
import { MaletaBarcoImpl } from 'src/app/nuevamaleta/models/maleta-barco-impl';
import { MaletaCabina } from 'src/app/nuevamaleta/models/maleta-cabina';
import { MaletaCabinaImpl } from 'src/app/nuevamaleta/models/maleta-cabina-impl';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { MaletaService } from '../service/maleta.service';


@Component({
  selector: 'app-maletas',
  templateUrl: './maletas.component.html',
  styleUrls: ['./maletas.component.css'],
})
export class MaletasComponent implements OnInit {
  maletasBarco: MaletaBarco[] = [];
  maletasCabina: MaletaCabina[] = [];
  maletaBarco = new MaletaBarcoImpl();
  maletaCabina = new MaletaCabinaImpl();

  constructor(private maletaService : MaletaService, private auxService : AuxiliarService) {}

  ngOnInit(): void {
    this.maletaService.getMaletas().subscribe((response) => this.maletasBarco = this.maletaService.extraerMaletasBarco(response));
  }
}

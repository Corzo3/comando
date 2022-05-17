import { Component, OnInit } from '@angular/core';
import { MaletaBarco } from 'src/app/nuevamaleta/models/maleta-barco';
import { MaletaBarcoImpl } from 'src/app/nuevamaleta/models/maleta-barco-impl';
import { MaletaCabina } from 'src/app/nuevamaleta/models/maleta-cabina';
import { MaletaCabinaImpl } from 'src/app/nuevamaleta/models/maleta-cabina-impl';


@Component({
  selector: 'app-maletas',
  templateUrl: './maletas.component.html',
  styleUrls: ['./maletas.component.css'],
})
export class MaletasComponent implements OnInit {
  maletasBarco: MaletaBarco[] = [];
  maletasCAbina: MaletaCabina[] = [];
  maletaBarco = new MaletaBarcoImpl();
  maletaCabina = new MaletaCabinaImpl();

  constructor() {}

  ngOnInit(): void {}
}

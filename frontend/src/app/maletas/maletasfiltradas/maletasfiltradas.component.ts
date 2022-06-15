import { Component, Input, OnInit } from '@angular/core';
import { Maleta } from '../models/maleta';
import { Maletaimpl } from '../models/maletaimpl';
import { MaletaService } from '../service/maleta.service';

@Component({
  selector: 'app-maletasfiltradas',
  templateUrl: './maletasfiltradas.component.html',
  styleUrls: ['./maletasfiltradas.component.css']
})
export class MaletasfiltradasComponent implements OnInit {
  @Input() maleta: Maleta = new Maletaimpl();
  maletas: Maleta[] = [];
  constructor(private maletaService: MaletaService) { }

  ngOnInit(): void {
    this.maletaService.getMaletas().subscribe((response) => {
      this.maletas = this.maletaService.extraerMaletas(response)
    })
  }

}

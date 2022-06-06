import { Component, Input, OnInit } from '@angular/core';
import { Maleta } from 'src/app/maletas/models/maleta';
import { Maletacabina } from 'src/app/maletas/models/maletacabina';
import { MaletaService } from 'src/app/maletas/service/maleta.service';
import { ElementoEquipo } from '../models/elementoequipo';
import { ElementoequipoImpl } from '../models/elementoequipo-impl';
import { ElementoService } from '../service/elemento.service';

@Component({
  selector: 'app-elementoitem',
  templateUrl: './elementoitem.component.html',
  styleUrls: ['./elementoitem.component.css']
})
export class ElementoitemComponent implements OnInit {
  maletas : Maleta [] = [];
  maletas1 : Maletacabina [] = [];
  @Input()
  elemento!: ElementoEquipo;
  constructor( private elementoService: ElementoService,
    private maletaService: MaletaService,) { }

  ngOnInit(): void {
    this.maletaService.getMaletasB().subscribe((response) => this.maletas = this.maletaService.extraerMaletasBarco(response));
    this.maletaService.getMaletasC().subscribe((response) => this.maletas1 = this.maletaService.extraerMaletasCabina(response));
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ElementoService } from 'src/app/elementosequipo/service/elemento.service';
import { Maletabarco } from '../../models/maletabarco';
import { Maletabarcoimpl } from '../../models/maletabarcoimpl';
import { MaletaService } from '../../service/maleta.service';

@Component({
  selector: 'app-mbarcomodificar',
  templateUrl: './mbarcomodificar.component.html',
  styleUrls: ['./mbarcomodificar.component.css']
})
export class MbarcomodificarComponent implements OnInit {
  maletasBarco : Maletabarco[] = [];

  @Input()
  maletaBarco!: Maletabarcoimpl;


  constructor(private maletaService : MaletaService, private elementoService: ElementoService) { }

  ngOnInit(): void {
    this.maletaService.getMaletasB().subscribe((response) => {
      this.maletasBarco = this.maletaService.extraerMaletasBarco(response);
    });

  }

  modificarMaletaBarco(maleta: Maletabarcoimpl): void{
    this.maletaService.patchMaletaBarco(maleta).subscribe();
  }

}

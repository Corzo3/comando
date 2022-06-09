import { Component, Input, OnInit } from '@angular/core';
import { Maletacabina } from '../../models/maletacabina';
import { Maletacabinaimpl } from '../../models/maletacabinaimpl';
import { MaletaService } from '../../service/maleta.service';

@Component({
  selector: 'app-mcabinamodificar',
  templateUrl: './mcabinamodificar.component.html',
  styleUrls: ['./mcabinamodificar.component.css']
})
export class McabinamodificarComponent implements OnInit {
  maletasCabina: Maletacabina[] = [];

  @Input()
  maletaCabina!: Maletacabinaimpl;

  constructor(private maletaService : MaletaService) { }

  ngOnInit(): void {
    this.maletaService.getMaletasC().subscribe((response) => {
      this.maletasCabina = this.maletaService.extraerMaletasCabina(response)
    });
  }

  modificarMaletaCabina(maleta: Maletacabinaimpl): void{
    this.maletaService.patchMaletaCabina(maleta).subscribe();
  }

}

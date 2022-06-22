import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';
import { ElementoequipoImpl } from 'src/app/elementosequipo/models/elementoequipo-impl';
import { ElementoService } from 'src/app/elementosequipo/service/elemento.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Maletacabina } from '../models/maletacabina';
import { Maletacabinaimpl } from '../models/maletacabinaimpl';
import { MaletaService } from '../service/maleta.service';

@Component({
  selector: 'app-elementos-cab-form',
  templateUrl: './elementos-cab-form.component.html',
  styleUrls: ['./elementos-cab-form.component.css']
})
export class ElementosCabFormComponent implements OnInit {
  @Input() maletaCabina: Maletacabina = new Maletacabinaimpl(0, 0, 0, 0);
  elementos: ElementoEquipo[] = [];
  elemento: ElementoEquipo = new ElementoequipoImpl();
  id: string = this.cargarMaletaCabina();
  host: string = environment.host;


  constructor( private activateRoute: ActivatedRoute,
    private elementoService: ElementoService,
    private maletaService: MaletaService,
    private router: Router,
    private auxService: AuxiliarService){ }

  ngOnInit(): void {

    this.maletaService.getMaletaC(this.id).subscribe((response) => {
      this.maletaCabina = this.maletaService.mapearMaletaC(response);
    });
    this.elementoService
      .getElementos()
      .subscribe(
        (response) =>
          (this.elementos = this.elementoService.extraerElementos(response))
      );
  }

  cargarMaletaCabina(): string {
    const idBarraNavegacion: string = this.activateRoute.snapshot.params['id'];
    return idBarraNavegacion;
  }
  create(): void {
    this.elemento.maleta = `${this.host}maletas/${this.id}`
    this.elementoService.postElemento(this.elemento);
  }


}

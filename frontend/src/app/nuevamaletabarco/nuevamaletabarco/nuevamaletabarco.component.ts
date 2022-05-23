import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';
import { Maletabarco } from 'src/app/maletas/models/maletabarco';
import { Maletabarcoimpl } from 'src/app/maletas/models/maletabarcoimpl';

@Component({
  selector: 'app-nuevamaletabarco',
  templateUrl: './nuevamaletabarco.component.html',
  styleUrls: ['./nuevamaletabarco.component.css'],
})
export class NuevamaletabarcoComponent implements OnInit {
  maleta: Maletabarco = new Maletabarcoimpl();
  elementos: ElementoEquipo[] = [];

  constructor(
    // private maletaBarcoService: MaletaBarcoService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  /* ngOnInit(): void {
    if (this.cargarMaletaBarco() != 'N') {
      let id: string = this.cargarMaletaBarco();
      this.maletaBarcoService.getMaletaBarco(id).subscribe((response) => {
        this.maleta = this.maletaBarcoService.mapearMaletaBarco(response);
        this.actualizarFechaRecogida();
      });
    }
  } */
  /* actualizarFechaRecogida(): string {
    let fechaMaleta = this.maleta.fechaRecogida;
    let fechaActualizada =
      fechaMaleta.slice(6, 10) +
      '-' +
      fechaMaleta.slice(3, 5) +
      '-' +
      fechaMaleta.slice(0, 2);
    return fechaActualizada;
  }
  create(): void {
    this.maleta.fechaRecogida = this.actualizarFechaRecogida();
    this.maletaBarcoService.create(this.maleta).subscribe((response) => {
      this.router.navigate(['/maletasbarco']);
    });
  }

  cargarMaletaBarco(): string {
    const idBarraNavegacion: string = this.activateRoute.snapshot.params['id'];
    return idBarraNavegacion;
  }

  actualizar(): void {
    this.maleta.fechaRecogida = this.actualizarFechaRecogida();
    this.maletaBarcoService.update(this.maleta).subscribe((response) => {
      this.router.navigate(['/maletasbarco']);
    });
  } */
}

import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';
import { EventEmitter } from '@angular/core';
import { Maletabarco } from '../../models/maletabarco';
import { Maletabarcoimpl } from '../../models/maletabarcoimpl';
import { MaletaService } from '../../service/maleta.service';
import { ElementoService } from 'src/app/elementosequipo/service/elemento.service';
import { Maletacabina } from '../../models/maletacabina';
import { ElementoequipoImpl } from 'src/app/elementosequipo/models/elementoequipo-impl';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-maletabarco',
  templateUrl: './maletabarco.component.html',
  styleUrls: ['./maletabarco.component.css'],
})
export class MaletabarcoComponent implements OnInit {
  @Input() maletaBarco: Maletabarco = new Maletabarcoimpl(0, '');
  @Input() elementosCargados: ElementoEquipo[] = [];
  @Output() maletaBarcoSeleccionada = new EventEmitter<Maletabarco>();
  @Output() maletaBarcoEliminar = new EventEmitter<Maletabarco>();
  maletaBarcoVerDatos = new Maletabarcoimpl(0, '');
  elemento: ElementoEquipo = new ElementoequipoImpl();
  elementos: ElementoEquipo[] = [];
  maletasBarco: Maletabarco[] = [];
  maletasCabina: Maletacabina[] = [];
  id: string = this.cargarMaletaBarco();
  host: string = environment.host;
  constructor(
    private activateRoute: ActivatedRoute,
    private maletaService: MaletaService,
    private elementoService: ElementoService,
    private http : HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id: string = this.cargarMaletaBarco();
    this.maletaService.getMaleta(id).subscribe((response) => {
      this.maletaBarco = this.maletaService.mapearMaletaB(response);
    });
    this.maletaService
    .getElementosMaletaB(this.activateRoute.snapshot.params['id'])
    .subscribe(
      (response) =>
        (this.elementos =
          this.maletaService.extraerElementosMaletaB(response))
    );
    /* this.elementoService.getElementos().subscribe((response) => {
      this.elementos = this.elementoService.extraerElementos(response);
    }); */
  }

  cargarMaletaBarco(): string {
    const idBarraNavegacion: string = this.activateRoute.snapshot.params['id'];
    return idBarraNavegacion;
  }

  modificarMaletaBarco(maleta: Maletabarcoimpl) {
    this.maletaService.patchMaletaBarco(maleta).subscribe();
  }

  verDatos(maletaBarco: Maletabarco): void {
    this.maletaBarcoVerDatos = maletaBarco;
  }
  sumarPeso() {
    let pesoTotal = 0;
    for (const elemento of this.elementos) {
      pesoTotal += elemento.peso;
    }
    return pesoTotal;
  }
  onElementoEquipoEliminar(elemento: ElementoEquipo) {
    this.elementoService.delete(elemento.id).subscribe((response) => {

      this.elementos = this.elementos.filter((e) => elemento !== e);
      location.reload;
    });
  }

  onElementoCrear(elemento : ElementoEquipo){
    /* this.elemento.maleta = `${this.host}maletas/${this.id}`
    this.elementoService.postElemento(this.elemento).subscribe(); */
    this.elementos.push(elemento)
    location.reload;
  }
  eliminarMaleta(){
    this.http.delete(`${this.host}maletas/${this.id}`).subscribe();
  }
}

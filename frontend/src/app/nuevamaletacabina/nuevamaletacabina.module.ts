import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NuevamaletacabinaRoutingModule } from './nuevamaletacabina-routing.module';
import { NuevamaletacabinaComponent } from './nuevamaletacabina/nuevamaletacabina.component';
import { CabinaformComponent } from './cabinaform/cabinaform.component';
import { ListadomaterialComponent } from './listadomaterial/listadomaterial.component';


@NgModule({
  declarations: [
    NuevamaletacabinaComponent,
    CabinaformComponent,
    ListadomaterialComponent
  ],
  imports: [
    CommonModule,
    NuevamaletacabinaRoutingModule,
    FormsModule
  ]
})
export class NuevamaletacabinaModule { }

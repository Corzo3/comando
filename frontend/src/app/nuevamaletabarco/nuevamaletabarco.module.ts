import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevamaletabarcoRoutingModule } from './nuevamaletabarco-routing.module';
import { BarcoformComponent } from './barcoform/barcoform.component';
import { NuevamaletabarcoComponent } from './nuevamaletabarco/nuevamaletabarco.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BarcoformComponent,
    NuevamaletabarcoComponent
  ],
  imports: [
    CommonModule,
    NuevamaletabarcoRoutingModule,
    FormsModule
  ]
})
export class NuevamaletabarcoModule { }

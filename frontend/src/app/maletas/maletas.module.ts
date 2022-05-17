import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaletasRoutingModule } from './maletas-routing.module';
import { MaletasComponent } from './maletas/maletas.component';
import { MaletabComponent } from './maletab/maletab.component';
import { MaletacComponent } from './maletac/maletac.component';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [
    MaletasComponent,
    MaletabComponent,
    MaletacComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    MaletasRoutingModule
  ]
})
export class MaletasModule { }

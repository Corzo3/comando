import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaletasRoutingModule } from './maletas-routing.module';
import { MaletasComponent } from './maletas/maletas.component';
import { MaletabComponent } from './maletab/maletab.component';
import { MaletacComponent } from './maletac/maletac.component';
import { ListaComponent } from './lista/lista.component';
import { AuxiliarService } from '../service/auxiliar.service';

@NgModule({
  declarations: [
    MaletasComponent,
    MaletabComponent,
    MaletacComponent,
    ListaComponent,

  ],
  imports: [CommonModule, MaletasRoutingModule, FormsModule],

  providers: [AuxiliarService],
})
export class MaletasModule {}

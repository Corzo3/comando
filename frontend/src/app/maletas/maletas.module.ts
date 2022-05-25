import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaletasRoutingModule } from './maletas-routing.module';
import { MaletasComponent } from './maletas/maletas.component';
import { ListaComponent } from './lista/lista.component';
import { AuxiliarService } from '../service/auxiliar.service';
import { BarcoFormComponent } from './barco-form/barco-form.component';
import { MaletasbarcoComponent } from './maletasbarco/maletasbarco.component';
import { MaletabarcoComponent } from './maletasbarco/maletabarco/maletabarco.component';
import { ElementosequipoModule } from '../elementosequipo/elementosequipo.module';

@NgModule({
  declarations: [
    MaletasComponent,
    ListaComponent,
    BarcoFormComponent,
    MaletasbarcoComponent,
    MaletabarcoComponent,

  ],
  imports: [CommonModule, MaletasRoutingModule, FormsModule, ElementosequipoModule],

  providers: [AuxiliarService],
})
export class MaletasModule {}

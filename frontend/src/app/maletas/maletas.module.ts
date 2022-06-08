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
import { MaletascabinaComponent } from './maletascabina/maletascabina.component';
import { ElementoListaItemComponent } from './elemento-lista-item/elemento-lista-item.component';
import { MaletacabinaComponent } from './maletascabina/maletacabina/maletacabina.component';
import { MbarcomodificarComponent } from './maletasbarco/mbarcomodificar/mbarcomodificar.component';
import { McabinamodificarComponent } from './maletascabina/mcabinamodificar/mcabinamodificar.component';



@NgModule({
  declarations: [
    MaletasComponent,
    ListaComponent,
    BarcoFormComponent,
    MaletasbarcoComponent,
    MaletabarcoComponent,
    MaletascabinaComponent,
    ElementoListaItemComponent,
    MaletacabinaComponent,
    MbarcomodificarComponent,
    McabinamodificarComponent,
  ],
  imports: [CommonModule, MaletasRoutingModule, FormsModule, ElementosequipoModule],

  providers: [AuxiliarService],
})
export class MaletasModule {}


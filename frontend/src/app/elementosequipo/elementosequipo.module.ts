import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ElementosequipoRoutingModule } from './elementosequipo-routing.module';
import { ElementosequipoComponent } from './elementosequipo/elementosequipo.component';
import { ElementoitemComponent } from './elementoitem/elementoitem.component';
import { AuxiliarService } from '../service/auxiliar.service';


@NgModule({
  declarations: [ElementosequipoComponent, ElementoitemComponent],
  imports: [CommonModule, ElementosequipoRoutingModule, FormsModule],
  providers: [AuxiliarService],
})
export class ElementosequipoModule {}

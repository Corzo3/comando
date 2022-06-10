import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementoComponent } from './elemento/elemento.component';
import { ElementosequipoComponent } from './elementosequipo/elementosequipo.component';

const routes: Routes = [
  {
    path: '',
    component: ElementosequipoComponent
  },
  {
    path: 'maletabarco',
    component: ElementoComponent
  },
  {
    path: 'maletacabina',
    component: ElementoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementosequipoRoutingModule { }

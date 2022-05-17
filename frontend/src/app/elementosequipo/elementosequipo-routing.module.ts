import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementosequipoComponent } from './elementosequipo/elementosequipo.component';

const routes: Routes = [
  {
    path: '',
    component: ElementosequipoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementosequipoRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaletasComponent } from './maletas/maletas.component';
import { ListaComponent } from './lista/lista.component';
import { BarcoFormComponent } from './barco-form/barco-form.component';
import { MaletabarcoComponent } from './maletasbarco/maletabarco/maletabarco.component';

const routes: Routes = [
  {
    path: '',
    component: MaletasComponent,
  },
  {
    path: 'barco-form',
    component: BarcoFormComponent,
  },
  {
    path: 'maletaBarco/:id',
    component: MaletabarcoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaletasRoutingModule {}

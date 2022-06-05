import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaletasComponent } from './maletas/maletas.component';
import { BarcoFormComponent } from './barco-form/barco-form.component';


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
    path: 'barco-form/:id',
    component: BarcoFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaletasRoutingModule {}

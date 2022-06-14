import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaletasComponent } from './maletas/maletas.component';
import { BarcoFormComponent } from './barco-form/barco-form.component';
import { MaletabarcoComponent } from './maletasbarco/maletabarco/maletabarco.component';
import { MaletacabinaComponent } from './maletascabina/maletacabina/maletacabina.component';
import { FiltradoComponent } from './filtrado/filtrado.component';


const routes: Routes = [
  {
    path: '',
    component: MaletasComponent,
  },
  {
    path:'maletabarco/:id',
    component:MaletabarcoComponent
  },
  {
    path:'maletacabina/:id',
    component:MaletacabinaComponent
  },
  {
    path: 'barco-form',
    component: BarcoFormComponent,
  },
  {
    path: 'barco-form/:id',
    component: BarcoFormComponent,
  },
  {
    path: 'filtrado',
    component: FiltradoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaletasRoutingModule {}

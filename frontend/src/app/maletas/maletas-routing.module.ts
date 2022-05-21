import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaletasComponent } from './maletas/maletas.component';
import { MaletabComponent } from './maletab/maletab.component';
import { MaletacComponent } from './maletac/maletac.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {
    path: '',
    component: MaletasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaletasRoutingModule {}

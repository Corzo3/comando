import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaletabarcoComponent } from './maletabarco/maletabarco.component';
import { MaletacabinaComponent } from './maletacabina/maletacabina.component';
import { ListadomaterialComponent } from './listadomaterial/listadomaterial.component';
import { BarcoFormComponent } from './barco-form/barco-form.component';
import { CabinaFormComponent } from './cabina-form/cabina-form.component';


const routes: Routes = [
  { path: 'maletabarco', component: MaletabarcoComponent },
  { path: 'maletacabina', component: MaletacabinaComponent },
  { path: 'listadomaterial', component: ListadomaterialComponent },
  { path: 'barco-form', component: BarcoFormComponent },
  { path: 'cabina-form', component: CabinaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevamaletaRoutingModule {}

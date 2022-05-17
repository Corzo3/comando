import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarcoformComponent } from './barcoform/barcoform.component';
import { ListadomaterialComponent } from './listadomaterial/listadomaterial.component';
import { NuevamaletabarcoComponent } from './nuevamaletabarco/nuevamaletabarco.component';

const routes: Routes = [
{
path:'',
component: NuevamaletabarcoComponent,
children: [
  {
    path: 'barcoform',
    component: BarcoformComponent
  },
  {
    path: 'listadomaterial',
    component: ListadomaterialComponent
  },
]

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevamaletabarcoRoutingModule { }

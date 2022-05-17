import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinaformComponent } from './cabinaform/cabinaform.component';
import { ListadomaterialComponent } from './listadomaterial/listadomaterial.component';
import { NuevamaletacabinaComponent } from './nuevamaletacabina/nuevamaletacabina.component';

const routes: Routes = [

  {
    path:'',
    component: NuevamaletacabinaComponent,
    children: [
      {
        path: 'cabinaform',
        component: CabinaformComponent
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
export class NuevamaletacabinaRoutingModule { }

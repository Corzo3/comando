import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'maletas',
    loadChildren: () =>
      import('./maletas/maletas.module').then((m) => m.MaletasModule),
  },
  {
    path: 'elementosequipo',
    loadChildren: () =>
      import('./elementosequipo/elementosequipo.module').then(
        (m) => m.ElementosequipoModule
      ),
  },

  {
    path: '',
    loadChildren: () =>
      import('./maletas/maletas.module').then((m) => m.MaletasModule),
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },

  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

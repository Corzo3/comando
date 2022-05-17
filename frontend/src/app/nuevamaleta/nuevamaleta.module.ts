import {NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { NuevamaletaRoutingModule } from './nuevamaleta-routing.module';
import { MaletabarcoComponent } from './maletabarco/maletabarco.component';
import { MaletacabinaComponent } from './maletacabina/maletacabina.component';
import { ListadomaterialComponent } from './listadomaterial/listadomaterial.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { BarcoFormComponent } from './barco-form/barco-form.component';
import { CabinaFormComponent } from './cabina-form/cabina-form.component';

@NgModule({
  declarations: [
    MaletabarcoComponent,
    MaletacabinaComponent,
    ListadomaterialComponent,
    BarcoFormComponent,
    CabinaFormComponent,

  ],
  imports: [
    CommonModule,
    NuevamaletaRoutingModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
  ],
})
export class NuevamaletaModule {}

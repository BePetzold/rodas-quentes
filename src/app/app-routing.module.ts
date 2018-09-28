import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent }      from './compra/compra.component';
import { MotosComponent } from './motos/motos.component';
import { CaminhoesComponent } from './caminhoes/caminhoes.component';

const routes: Routes = [
  { path: '', component: CompraComponent },
  { path: 'motos', component: MotosComponent},
  { path: 'caminhoes', component: CaminhoesComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

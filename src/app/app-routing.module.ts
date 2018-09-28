import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent }      from './compra/compra.component';
import { MotosComponent } from './motos/motos.component';
import { CaminhoesComponent } from './caminhoes/caminhoes.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'carros', component: CompraComponent },
  { path: 'motos', component: MotosComponent},
  { path: 'caminhoes', component: CaminhoesComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

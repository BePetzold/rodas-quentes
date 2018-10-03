import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosMarcasComponent }      from './carros-marcas/carros-marcas.component';
import { MotosMarcasComponent } from './motos-marcas/motos-marcas.component';
import { CaminhoesComponent } from './caminhoes/caminhoes.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'carros', component: CarrosMarcasComponent },
  { path: 'motos', component: MotosMarcasComponent},
  { path: 'caminhoes', component: CaminhoesComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

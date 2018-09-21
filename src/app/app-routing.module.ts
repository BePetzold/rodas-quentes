import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent }      from './compra/compra.component';
import { VendaComponent }      from './venda/venda.component';

const routes: Routes = [
  { path: '', component: CompraComponent },
  { path: 'venda', component: VendaComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CompraComponent } from './compra/compra.component';
import { VendaComponent } from './venda/venda.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderModule } from 'ngx-order-pipe';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CompraComponent,
    VendaComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CompraComponent } from './compra/compra.component';
import { VendaComponent } from './venda/venda.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderModule } from 'ngx-order-pipe';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CompraComponent,
    VendaComponent,
    NavbarComponent,
    VeiculosComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpModule,
    OrderModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
    ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

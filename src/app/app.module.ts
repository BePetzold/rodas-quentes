import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CompraComponent } from './compra/compra.component';
import { VendaComponent } from './venda/venda.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderModule } from 'ngx-order-pipe';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { AutomovelComponent } from './automovel/automovel.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { MotosComponent } from './motos/motos.component';
import { MotosDialogComponent } from './motos-dialog/motos-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CompraComponent,
    VendaComponent,
    NavbarComponent,
    VeiculosComponent,
    AutomovelComponent,
    DetalhesComponent,
    MotosComponent,
    MotosDialogComponent
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
    DataService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    {provide: MatDialogRef, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],
  entryComponents: [VeiculosComponent, AutomovelComponent, DetalhesComponent, MotosDialogComponent]
})
export class AppModule { }

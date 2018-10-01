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
import { MotoComponent } from './moto/moto.component';
import { MotoDetalhesComponent } from './moto-detalhes/moto-detalhes.component';
import { CaminhoesComponent } from './caminhoes/caminhoes.component';
import { CaminhaoComponent } from './caminhao/caminhao.component';
import { CamComponent } from './cam/cam.component';
import { CaminhaoDetalhesComponent } from './caminhao-detalhes/caminhao-detalhes.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';

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
    MotosDialogComponent,
    MotoComponent,
    MotoDetalhesComponent,
    CaminhoesComponent,
    CaminhaoComponent,
    CamComponent,
    CaminhaoDetalhesComponent,
    HomepageComponent,
    FooterComponent
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
  entryComponents: [VeiculosComponent, AutomovelComponent, DetalhesComponent, MotosDialogComponent, MotosComponent, MotoComponent,MotoDetalhesComponent, CaminhaoComponent, CaminhoesComponent, CamComponent, CaminhaoDetalhesComponent]
})
export class AppModule { }

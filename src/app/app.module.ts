import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderModule } from 'ngx-order-pipe';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { CaminhoesComponent } from './caminhoes/caminhoes.component';
import { CaminhaoComponent } from './caminhao/caminhao.component';
import { CamComponent } from './cam/cam.component';
import { CaminhaoDetalhesComponent } from './caminhao-detalhes/caminhao-detalhes.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { CarrosMarcasComponent } from './carros-marcas/carros-marcas.component';
import { CarrosModelosComponent } from './carros-modelos/carros-modelos.component';
import { CarrosAnosComponent } from './carros-anos/carros-anos.component';
import { CarrosDetalhesComponent } from './carros-detalhes/carros-detalhes.component';
import { MotosMarcasComponent } from './motos-marcas/motos-marcas.component';
import { MotosModelosComponent } from './motos-modelos/motos-modelos.component';
import { MotosAnosComponent } from './motos-anos/motos-anos.component';
import { MotosDetalhesComponent } from './motos-detalhes/motos-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CaminhoesComponent,
    CaminhaoComponent,
    CamComponent,
    CaminhaoDetalhesComponent,
    HomepageComponent,
    FooterComponent,
    CarrosMarcasComponent,
    CarrosModelosComponent,
    CarrosAnosComponent,
    CarrosDetalhesComponent,
    MotosMarcasComponent,
    MotosModelosComponent,
    MotosAnosComponent,
    MotosDetalhesComponent
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
  entryComponents: [CarrosModelosComponent, CarrosAnosComponent, CarrosDetalhesComponent, MotosModelosComponent, MotosAnosComponent, MotosDetalhesComponent, CaminhaoComponent, CaminhoesComponent, CamComponent, CaminhaoDetalhesComponent]
})
export class AppModule { }

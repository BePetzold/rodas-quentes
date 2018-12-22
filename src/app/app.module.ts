import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderModule } from 'ngx-order-pipe';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { PrintService } from './print.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
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
import { CaminhoesMarcasComponent } from './caminhoes-marcas/caminhoes-marcas.component';
import { CaminhoesModelosComponent } from './caminhoes-modelos/caminhoes-modelos.component';
import { CaminhoesAnosComponent } from './caminhoes-anos/caminhoes-anos.component';
import { CaminhoesDetalhesComponent } from './caminhoes-detalhes/caminhoes-detalhes.component';
import { AboutComponent } from './about/about.component';
import { DataComponent } from './data/data.component';
import { UrlService } from './url.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    CarrosMarcasComponent,
    CarrosModelosComponent,
    CarrosAnosComponent,
    CarrosDetalhesComponent,
    MotosMarcasComponent,
    MotosModelosComponent,
    MotosAnosComponent,
    MotosDetalhesComponent,
    CaminhoesMarcasComponent,
    CaminhoesModelosComponent,
    CaminhoesAnosComponent,
    CaminhoesDetalhesComponent,
    AboutComponent,
    DataComponent
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
    PrintService,
    UrlService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    {provide: MatDialogRef, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],
  entryComponents: [CarrosModelosComponent, CarrosAnosComponent, CarrosDetalhesComponent, MotosModelosComponent, MotosAnosComponent, MotosDetalhesComponent, CaminhoesModelosComponent, CaminhoesAnosComponent, CaminhoesDetalhesComponent]
})
export class AppModule {}
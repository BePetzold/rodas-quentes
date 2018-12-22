import { Component, OnInit } from '@angular/core';
import { PrintService } from '../print.service';
import { MatDialog } from '@angular/material';
import { CarrosModelosComponent } from '../carros-modelos/carros-modelos.component';
import { UrlService } from '../url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carros-marcas',
  templateUrl: './carros-marcas.component.html',
  styleUrls: ['./carros-marcas.component.css']
})
export class CarrosMarcasComponent implements OnInit {

  marcas: any = [];
  marcasFiltro: any = [];

  constructor(public print: PrintService, public dialog: MatDialog, public api: UrlService, public router: Router) {
  }

  ngOnInit() {
    this.carregarMarcas();
  }

  carregarMarcas() {
    this.api.getMarcasCar().subscribe(
      res => {
        this.marcasFiltro = res;
        this.marcas = res;
        this.sortMarcas();
      }
    )
  }

  aplicaFiltro(value) {
    this.marcasFiltro = [];
    this.marcasFiltro = this.marcas.filter(function (m) {
      return m.name.toUpperCase().includes(value.toUpperCase());
    })
  }

  sortMarcas() {
    this.marcas.sort((left, right): number => {
      if (left.name < right.name) {
        return -1;
      } if (left.name > right.name) {
        return 1;
      }
      return 0;
    })
    this.marcasFiltro = this.marcas;
  }

  mostraCarros(id_marca) {
    this.api.id_marca_carros = id_marca;
    let dialogRef = this.dialog.open(CarrosModelosComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }

  clearInput() {
    let input = <HTMLInputElement>document.getElementById('pesquisar');
    input.value = '';
    this.aplicaFiltro(input.value);
  }
}


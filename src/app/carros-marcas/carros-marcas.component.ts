import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';
import { CarrosModelosComponent } from '../carros-modelos/carros-modelos.component';

@Component({
  selector: 'app-carros-marcas',
  templateUrl: './carros-marcas.component.html',
  styleUrls: ['./carros-marcas.component.css']
})
export class CarrosMarcasComponent implements OnInit {

  marcas: any = [];
  marcasFiltro: any = [];

  constructor(public _data: DataService, public dialog: MatDialog) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.carregarMarcas();
    }, 600);
  }

  carregarMarcas() {
    this.marcasFiltro = this._data.carregar_carros;
    this.marcas = this._data.carregar_carros;
  }

  aplicaFiltro(value) {
    this.marcasFiltro = [];
    this.marcasFiltro = this.marcas.filter(function (m) {
      return m.name.toUpperCase().startsWith(value.toUpperCase());
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
    this._data.setVeiculos(id_marca);
    let dialogRef = this.dialog.open(CarrosModelosComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }
}


import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';
import { VeiculosComponent } from '../veiculos/veiculos.component';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.css']
})
export class MotosComponent implements OnInit {

  txtFiltro: string = "";
  marcas = [];
  marcasFiltro = [];

  constructor(private _data: DataService, public dialog: MatDialog) {}

  ngOnInit() {
    setTimeout(() => {
      this.carregarMarcas();
    }, 300);
  }

  carregarMarcas() {
    this.marcasFiltro = this._data.carregar;
    this.marcas = this._data.carregar;
  }

  addMarca(marca) {
    let m = {
      name: marca.toUpperCase(),
      fipe_name: marca.toUpperCase(),
      order: 0,
      key: "",
      id: 0
    }
    this.marcas.push(m);
    this.sortMarcas();
    this._data.changeMarca(this.marcas);
  }

  aplicaFiltro(value) {
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

  mostraMotos(id_marca){
    this._data.setVeiculos(id_marca);
    let dialogRef = this.dialog.open(MotosComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }
}

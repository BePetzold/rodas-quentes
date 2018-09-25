import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  txtFiltro: string = "";
  marcas = [];
  marcasFiltro = [];

  constructor(private _data: DataService) {}

  ngOnInit() {
    this.carregarMarcas();
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
}

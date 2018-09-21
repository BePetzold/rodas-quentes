import { Component, OnInit } from '@angular/core';
import { CarrosServiceService } from '../carros-service.service';



@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css'],
})

export class CompraComponent implements OnInit {

  txtFiltro: string = "";
  marcas = [];
  marcasFiltro = [];

  show: boolean = false;

  constructor(private api: CarrosServiceService) {
  }

  ngOnInit() {
    this.preenArr();
  }

  preenArr() {
    this.api.getMarcas().subscribe(res => {
      this.marcas = res;
      this.sortMarcas();
      this.marcasFiltro = this.marcas.slice(0);
      console.log(this.marcasFiltro);
    })
  }

  deleteBool() {
    console.log(this.marcas.length);
    this.show = !this.show;
  }

  aplicaFiltro(value) {
    console.log(value);

    this.marcasFiltro = this.marcas.map(function (m) {
      if (value != null && m.name.startsWith(value.toUpperCase()))
        return m;
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
  }

  deleteMarca(i) {
    this.marcas.splice(i, 1);
    this.marcasFiltro.splice(i, 1);
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
    this.updateMarca();
  }

  updateMarca() {
    this.sortMarcas();
    this.marcasFiltro = this.marcas.slice(0);
    console.log(this.marcasFiltro);
  }
}

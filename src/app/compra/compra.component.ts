import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';
import { VeiculosComponent } from '../veiculos/veiculos.component';


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
  selected_marca: any = null;

  wait = false; 

  constructor(private _data: DataService, public dialog: MatDialog) {
  }

  ngOnInit() { 
    setTimeout(() => {
      this.carregarMarcas();
    }, 400);
  }

  carregarMarcas() {
    this.marcasFiltro = this._data.carregar;
    this.marcas = this._data.carregar;
  }

  deleteBool() {
    this.show = !this.show;
  }

  aplicaFiltro(value) {
    this.marcasFiltro = [];
    this.marcasFiltro = this.marcas.filter(function (m) {
      return m.name.toUpperCase().startsWith(value.toUpperCase());
    })
  }

  deleteMarca(name) {
    this.marcas = this.marcas.filter(function (m) {
      return m.name != name;
    })
    this.sortMarcas();
    this._data.changeMarca(this.marcas);
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

  mostraCarros(id_marca){
    this._data.setVeiculos(id_marca);
    let dialogRef = this.dialog.open(VeiculosComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }
}

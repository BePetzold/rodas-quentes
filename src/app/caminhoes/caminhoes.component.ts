import { Component, OnInit } from '@angular/core';
import { DataCaminhoesService } from '../data-caminhoes.service';
import { MatDialog } from '@angular/material';
import { CaminhaoComponent } from '../caminhao/caminhao.component';


@Component({
  selector: 'app-caminhoes',
  templateUrl: './caminhoes.component.html',
  styleUrls: ['./caminhoes.component.css']
})
export class CaminhoesComponent implements OnInit {

  txtFiltro: string = "";
  marcas = [];
  marcasFiltro = [];
  show: boolean = false;
  selected_marca: any = null;

  wait = false; 

  constructor(private _data: DataCaminhoesService, public dialog: MatDialog) {
  }

  ngOnInit() { 
    setTimeout(() => {
      this.carregarMarcas();
    }, 500);
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

  mostraCaminhoes(id_marca){
    this._data.setCaminhao(id_marca);
    let dialogRef = this.dialog.open(CaminhaoComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }
}
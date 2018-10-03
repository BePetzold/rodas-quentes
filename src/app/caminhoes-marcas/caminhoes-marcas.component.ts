import { Component, OnInit } from '@angular/core';
import { DataCaminhoesService } from '../data-caminhoes.service';
import { MatDialog } from '@angular/material';
import { CaminhoesModelosComponent } from '../caminhoes-modelos/caminhoes-modelos.component';

@Component({
  selector: 'app-caminhoes-marcas',
  templateUrl: './caminhoes-marcas.component.html',
  styleUrls: ['./caminhoes-marcas.component.css']
})

export class CaminhoesMarcasComponent implements OnInit {

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
    }, 400);
  }

  carregarMarcas() {
    this.marcasFiltro = this._data.carregar;
    this.marcas = this._data.carregar;
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

  mostraCaminhoes(id_marca) {
    this._data.setCaminhao(id_marca);
    let dialogRef = this.dialog.open(CaminhoesModelosComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }
}
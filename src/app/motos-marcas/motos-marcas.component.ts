import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';
import { DataMotosService } from '../data-motos.service';
import { MotosModelosComponent } from '../motos-modelos/motos-modelos.component';

@Component({
  selector: 'app-motos-marcas',
  templateUrl: './motos-marcas.component.html',
  styleUrls: ['./motos-marcas.component.css']
})
export class MotosMarcasComponent implements OnInit {

  txtFiltro: string = "";
  marcas = [];
  marcasFiltro = [];

  constructor(private _data: DataMotosService, public dialog: MatDialog) { }

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

  mostraMotos(id_marca) {
    this._data.setMoto(id_marca);
    let dialogRef = this.dialog.open(MotosModelosComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }
}

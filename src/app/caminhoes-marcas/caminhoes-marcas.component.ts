import { Component, OnInit } from '@angular/core';
import { PrintService } from '../print.service';
import { MatDialog } from '@angular/material';
import { CaminhoesModelosComponent } from '../caminhoes-modelos/caminhoes-modelos.component';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-caminhoes-marcas',
  templateUrl: './caminhoes-marcas.component.html',
  styleUrls: ['./caminhoes-marcas.component.css']
})

export class CaminhoesMarcasComponent implements OnInit {

  marcas: any = [];
  marcasFiltro = [];

  constructor(public print: PrintService, public dialog: MatDialog, public api: UrlService) {
  }

  ngOnInit() {
    this.carregarMarcas();
  }

  carregarMarcas() {
    this.api.getMarcasCam().subscribe(
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

  mostraCaminhoes(id_marca) {
    this.api.id_marca_caminhoes = id_marca;
    let dialogRef = this.dialog.open(CaminhoesModelosComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }
}
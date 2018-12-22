import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PrintService } from '../print.service';
import { MotosModelosComponent } from '../motos-modelos/motos-modelos.component';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-motos-marcas',
  templateUrl: './motos-marcas.component.html',
  styleUrls: ['./motos-marcas.component.css']
})
export class MotosMarcasComponent implements OnInit {

  marcas: any = [];
  marcasFiltro: any = [];

  constructor(public print: PrintService, public dialog: MatDialog, public api: UrlService) { }

  ngOnInit() {
    this.carregarMarcas();
  }

  carregarMarcas() {
    this.api.getMarcasMot().subscribe(
      res => {
        this.marcasFiltro = res;
        this.marcas = res;
        this.sortMarcas();
      }
    )
  }

  aplicaFiltro(value) {
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

  mostraMotos(id_marca) {
    this.api.id_marca_motos = id_marca;
    let dialogRef = this.dialog.open(MotosModelosComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }
}

import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { MatDialogRef } from '@angular/material';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';
import { CarrosAnosComponent } from '../carros-anos/carros-anos.component';

@Component({
  selector: 'app-carros-modelos',
  templateUrl: './carros-modelos.component.html',
  styleUrls: ['./carros-modelos.component.css']
})

export class CarrosModelosComponent implements OnInit {

  veiculos: any = [];
  veiculosFiltro: any = [];

  constructor(private api: UrlService, public dialogRef: MatDialogRef<CarrosModelosComponent>, private _data: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      this.veiculos = this._data.getVeiculos();
      this.veiculosFiltro = this.veiculos;
    }, 600);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostraAutomovel(id_auto) {
    if (id_auto != 0) {
      this._data.setAutomovel(id_auto);
      let dialogRef = this.dialog.open(CarrosAnosComponent, {
        width: '600px',
      });
      dialogRef.updatePosition();
    }
  }

  aplicaFiltro(value) {
    this.veiculosFiltro = [];
    this.veiculosFiltro = this.veiculos.filter(function (m) {
      return m.name.toUpperCase().startsWith(value.toUpperCase());
    })
  }
}

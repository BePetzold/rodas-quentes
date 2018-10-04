import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatDialog } from '@angular/material';
import { MotosAnosComponent } from '../motos-anos/motos-anos.component';
import { UrlService } from '../url.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-motos-modelos',
  templateUrl: './motos-modelos.component.html',
  styleUrls: ['./motos-modelos.component.css']
})

export class MotosModelosComponent implements OnInit {

  motos: any = [];
  motosFiltro: any = [];
  constructor(private api: UrlService, public dialogRef: MatDialogRef<MotosModelosComponent>, private _data: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      this.motos = this._data.getMoto();
      this.motosFiltro = this.motos;
    }, 500);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostraMotos(id_moto) {
    if (id_moto != 0) {
      this._data.setMotos(id_moto);
      let dialogRef = this.dialog.open(MotosAnosComponent, {
        width: '600px',
      });
      dialogRef.updatePosition();
    }
  }

  aplicaFiltro(value) {
    this.motosFiltro = [];
    this.motosFiltro = this.motos.filter(function (m) {
      return m.name.toUpperCase().startsWith(value.toUpperCase());
    })
  }
}
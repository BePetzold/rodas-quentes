import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';
import { DataMotosService } from '../data-motos.service';
import { MotosService } from '../motos.service';
import { MatDialogRef } from '@angular/material';
import { MotosDetalhesComponent } from '../motos-detalhes/motos-detalhes.component';

@Component({
  selector: 'app-motos-anos',
  templateUrl: './motos-anos.component.html',
  styleUrls: ['./motos-anos.component.css']
})

export class MotosAnosComponent implements OnInit {

  txtFiltro: string = "";
  moto: any = [];
  motoFiltro = [];
  constructor(private api: MotosService, public dialogRef: MatDialogRef<MotosAnosComponent>, private _data: DataMotosService, public dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      this.moto = this._data.getMotos();
      this.motoFiltro = this.moto;
    }, 500);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostraDetalhes(id) {
    this._data.setDetalhes(id);
    let dialogRef = this.dialog.open(MotosDetalhesComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }

  aplicaFiltro(value) {
    this.motoFiltro = [];
    this.motoFiltro = this.moto.filter(function (m) {
      return m.name.toUpperCase().startsWith(value.toUpperCase());
    })
  }
}
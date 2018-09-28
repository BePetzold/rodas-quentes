import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';
import { DataMotosService } from '../data-motos.service';
import { MotosDialogComponent } from '../motos-dialog/motos-dialog.component';
import { MotosService } from '../motos.service';
import { MatDialogRef } from '@angular/material';
import { MotoDetalhesComponent } from '../moto-detalhes/moto-detalhes.component';


@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css']
})
export class MotoComponent implements OnInit {

  txtFiltro: string = "";
  moto: any = [];
  motoFiltro = [];
  constructor(private api: MotosService, public dialogRef: MatDialogRef<MotoComponent>, private _data: DataMotosService, public dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      this.moto = this._data.getMotos();
      this.motoFiltro = this.moto;
    }, 500);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostraDetalhes(id){
    this._data.setDetalhes(id);
    let dialogRef = this.dialog.open(MotoDetalhesComponent, {
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
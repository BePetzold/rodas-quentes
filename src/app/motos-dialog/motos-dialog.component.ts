import { Component, OnInit } from '@angular/core';
import { CarrosServiceService } from '../carros-service.service';
import { MatDialogRef } from '@angular/material';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';
import { MotoComponent } from '../moto/moto.component';
import { MotosService } from '../motos.service';
import { DataMotosService } from '../data-motos.service';

@Component({
  selector: 'app-motos-dialog',
  templateUrl: './motos-dialog.component.html',
  styleUrls: ['./motos-dialog.component.css']
})
export class MotosDialogComponent implements OnInit {

  motos: any = [];
  motosFiltro = [];
  constructor(private api: MotosService, public dialogRef: MatDialogRef<MotosDialogComponent>, private _data: DataMotosService, public dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      this.motos = this._data.getMoto();
      this.motosFiltro = this.motos;
    }, 500);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostraMotos(id_moto){
    if(id_moto != 0){
    this._data.setMotos(id_moto);
    let dialogRef = this.dialog.open(MotoComponent, {
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

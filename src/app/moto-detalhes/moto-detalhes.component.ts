import { Component, OnInit } from '@angular/core';
import { MotosService } from '../motos.service';
import { MatDialogRef } from '@angular/material';
import { DataMotosService } from '../data-motos.service';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-moto-detalhes',
  templateUrl: './moto-detalhes.component.html',
  styleUrls: ['./moto-detalhes.component.css']
})
export class MotoDetalhesComponent implements OnInit {

  detalhe;
  constructor(private api: MotosService, public dialogRef: MatDialogRef<MotoDetalhesComponent>, private _data: DataMotosService, public dialog: MatDialog) { }
  ngOnInit() {
    setTimeout(() => {
      this.detalhe = this._data.getDetalhes();
    }, 500);
  }
  
  closeDialog() {
    this.dialogRef.close();
  }

}

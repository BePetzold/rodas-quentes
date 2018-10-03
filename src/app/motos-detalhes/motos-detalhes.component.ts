import { Component, OnInit } from '@angular/core';
import { MotosService } from '../motos.service';
import { MatDialogRef } from '@angular/material';
import { DataMotosService } from '../data-motos.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-motos-detalhes',
  templateUrl: './motos-detalhes.component.html',
  styleUrls: ['./motos-detalhes.component.css']
})

export class MotosDetalhesComponent implements OnInit {

  detalhe;

  constructor(private api: MotosService, public dialogRef: MatDialogRef<MotosDetalhesComponent>, private _data: DataMotosService, public dialog: MatDialog) { }
  ngOnInit() {
    setTimeout(() => {
      this.detalhe = this._data.getDetalhes();
    }, 500);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

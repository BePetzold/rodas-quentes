import { Component, OnInit } from '@angular/core';
import { CarrosServiceService } from '../carros-service.service';
import { MatDialogRef } from '@angular/material';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-carros-detalhes',
  templateUrl: './carros-detalhes.component.html',
  styleUrls: ['./carros-detalhes.component.css']
})

export class CarrosDetalhesComponent implements OnInit {

  detalhe;

  constructor(private api: CarrosServiceService, public dialogRef: MatDialogRef<CarrosDetalhesComponent>, private _data: DataService, public dialog: MatDialog) { }
  ngOnInit() {
    setTimeout(() => {
      this.detalhe = this._data.getDetalhes();
    }, 500);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

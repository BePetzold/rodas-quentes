import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatDialog } from '@angular/material';
import { UrlService } from '../url.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-motos-detalhes',
  templateUrl: './motos-detalhes.component.html',
  styleUrls: ['./motos-detalhes.component.css']
})

export class MotosDetalhesComponent implements OnInit {

  detalhe: any = [];

  constructor(private api: UrlService, public dialogRef: MatDialogRef<MotosDetalhesComponent>, private _data: DataService, public dialog: MatDialog) { }
  ngOnInit() {
    setTimeout(() => {
      this.detalhe = this._data.getDetalhesMot();
    }, 500);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

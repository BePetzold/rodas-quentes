import { Component, OnInit } from '@angular/core';
import { CaminhoesService } from '../caminhoes.service';
import { MatDialogRef } from '@angular/material';
import { DataCaminhoesService } from '../data-caminhoes.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-caminhoes-detalhes',
  templateUrl: './caminhoes-detalhes.component.html',
  styleUrls: ['./caminhoes-detalhes.component.css']
})
export class CaminhoesDetalhesComponent implements OnInit {

  detalhe;
  constructor(private api: CaminhoesService, public dialogRef: MatDialogRef<CaminhoesDetalhesComponent>, private _data: DataCaminhoesService, public dialog: MatDialog) { }
  ngOnInit() {
    setTimeout(() => {
      this.detalhe = this._data.getDetalhes();
    }, 600);
  }
  
  closeDialog() {
    this.dialogRef.close();
  }
}
import { Component, OnInit } from '@angular/core';
import { CaminhoesService } from '../caminhoes.service';
import { MatDialogRef } from '@angular/material';
import { DataCaminhoesService } from '../data-caminhoes.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-caminhao-detalhes',
  templateUrl: './caminhao-detalhes.component.html',
  styleUrls: ['./caminhao-detalhes.component.css']
})
export class CaminhaoDetalhesComponent implements OnInit {

  detalhe;
  constructor(private api: CaminhoesService, public dialogRef: MatDialogRef<CaminhaoDetalhesComponent>, private _data: DataCaminhoesService, public dialog: MatDialog) { }
  ngOnInit() {
    setTimeout(() => {
      this.detalhe = this._data.getDetalhes();
    }, 600);
  }
  
  closeDialog() {
    this.dialogRef.close();
  }

}


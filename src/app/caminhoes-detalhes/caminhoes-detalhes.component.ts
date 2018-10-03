import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { MatDialogRef } from '@angular/material';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-caminhoes-detalhes',
  templateUrl: './caminhoes-detalhes.component.html',
  styleUrls: ['./caminhoes-detalhes.component.css']
})
export class CaminhoesDetalhesComponent implements OnInit {

  detalhe;
  constructor(private api: UrlService, public dialogRef: MatDialogRef<CaminhoesDetalhesComponent>, private _data: DataService, public dialog: MatDialog) { }
  ngOnInit() {
    setTimeout(() => {
      this.detalhe = this._data.getDetalhesCam();
    }, 600);
  }
  
  closeDialog() {
    this.dialogRef.close();
  }
}
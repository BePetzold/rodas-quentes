import { Component, OnInit } from '@angular/core';
import { DataCaminhoesService } from '../data-caminhoes.service';
import { MatDialog } from '@angular/material';
import { CaminhoesService } from '../caminhoes.service';
import { MatDialogRef } from '@angular/material';
import { CaminhoesDetalhesComponent } from '../caminhoes-detalhes/caminhoes-detalhes.component';

@Component({
  selector: 'app-caminhoes-anos',
  templateUrl: './caminhoes-anos.component.html',
  styleUrls: ['./caminhoes-anos.component.css']
})

export class CaminhoesAnosComponent implements OnInit {

  txtFiltro: string = "";
  caminhao: any = [];
  caminhaoFiltro = [];
  constructor(private api: CaminhoesService, public dialogRef: MatDialogRef<CaminhoesAnosComponent>, private _data: DataCaminhoesService, public dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      this.caminhao = this._data.getCaminhoes();
      this.caminhaoFiltro = this.caminhao;
    }, 500);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostraDetalhes(id) {
    this._data.setDetalhes(id);
    let dialogRef = this.dialog.open(CaminhoesDetalhesComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }

  aplicaFiltro(value) {
    this.caminhaoFiltro = [];
    this.caminhaoFiltro = this.caminhao.filter(function (m) {
      return m.name.toUpperCase().startsWith(value.toUpperCase());
    })
  }
}
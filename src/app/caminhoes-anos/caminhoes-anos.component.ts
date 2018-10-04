import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';
import { UrlService } from '../url.service';
import { MatDialogRef } from '@angular/material';
import { CaminhoesDetalhesComponent } from '../caminhoes-detalhes/caminhoes-detalhes.component';

@Component({
  selector: 'app-caminhoes-anos',
  templateUrl: './caminhoes-anos.component.html',
  styleUrls: ['./caminhoes-anos.component.css']
})

export class CaminhoesAnosComponent implements OnInit {

  caminhao: any = [];
  caminhaoFiltro: any = [];
  
  constructor(private api: UrlService, public dialogRef: MatDialogRef<CaminhoesAnosComponent>, private _data: DataService, public dialog: MatDialog) { }

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
    this._data.setDetalhesCam(id);
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
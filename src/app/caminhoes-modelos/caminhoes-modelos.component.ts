import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { MatDialogRef } from '@angular/material';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';
import { CaminhoesAnosComponent } from '../caminhoes-anos/caminhoes-anos.component';

@Component({
  selector: 'app-caminhoes-modelos',
  templateUrl: './caminhoes-modelos.component.html',
  styleUrls: ['./caminhoes-modelos.component.css']
})
export class CaminhoesModelosComponent implements OnInit {

  caminhoes: any = [];
  caminhoesFiltro: any = [];
  constructor(private api: UrlService, public dialogRef: MatDialogRef<CaminhoesModelosComponent>, private _data: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      this.caminhoes = this._data.getCaminhao();
      this.caminhoesFiltro = this.caminhoes;
    }, 500);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostraCaminhoes(id_moto) {
    if (id_moto != 0) {
      this._data.setCaminhoes(id_moto);
      let dialogRef = this.dialog.open(CaminhoesAnosComponent, {
        width: '600px',
      });
      dialogRef.updatePosition();
    }
  }

  aplicaFiltro(value) {
    this.caminhoesFiltro = [];
    this.caminhoesFiltro = this.caminhoes.filter(function (m) {
      return m.name.toUpperCase().startsWith(value.toUpperCase());
    })
  }
}
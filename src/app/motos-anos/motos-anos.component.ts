import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DataService } from '../data.service';
import { UrlService } from '../url.service';
import { MatDialogRef } from '@angular/material';
import { MotosDetalhesComponent } from '../motos-detalhes/motos-detalhes.component';

@Component({
  selector: 'app-motos-anos',
  templateUrl: './motos-anos.component.html',
  styleUrls: ['./motos-anos.component.css']
})

export class MotosAnosComponent implements OnInit {
 
  moto: any = [];
  motoFiltro: any = [];

  constructor(private api: UrlService, public dialogRef: MatDialogRef<MotosAnosComponent>, public _data: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      this.moto = this._data.getMotos();
      this.motoFiltro = this.moto;
    }, 600);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostraDetalhes(id) {
    this._data.setDetalhesMot(id);
    let dialogRef = this.dialog.open(MotosDetalhesComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }

  aplicaFiltro(value) {
    this.motoFiltro = [];
    this.motoFiltro = this.moto.filter(function (m) {
      return m.name.toUpperCase().startsWith(value.toUpperCase());
    })
  }
}
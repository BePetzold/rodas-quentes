import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PrintService } from '../print.service';
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
  loading = true;

  constructor(private api: UrlService, public dialogRef: MatDialogRef<MotosAnosComponent>, public print: PrintService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getModelos();
  }

  getModelos() {
    this.api.getMotoneta().subscribe(
      res => {
        this.moto = res;
        this.motoFiltro = res;
        this.loading = false;
      }
    )
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostraDetalhes(id) {
    this.api.id_motos_modelo = id;
    let dialogRef = this.dialog.open(MotosDetalhesComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }

  aplicaFiltro(value) {
    this.motoFiltro = [];
    this.motoFiltro = this.moto.filter(function (m) {
      return m.name.toUpperCase().includes(value.toUpperCase());
    })
  }
}
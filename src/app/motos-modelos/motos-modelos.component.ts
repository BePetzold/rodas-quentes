import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatDialog } from '@angular/material';
import { MotosAnosComponent } from '../motos-anos/motos-anos.component';
import { UrlService } from '../url.service';
import { PrintService } from '../print.service';

@Component({
  selector: 'app-motos-modelos',
  templateUrl: './motos-modelos.component.html',
  styleUrls: ['./motos-modelos.component.css']
})

export class MotosModelosComponent implements OnInit {

  motos: any = [];
  motosFiltro: any = [];
  loading = true;

  constructor(private api: UrlService, public dialogRef: MatDialogRef<MotosModelosComponent>, public print: PrintService, public dialog: MatDialog) { }

  ngOnInit() {
    this.carregarModelos();
  }

  carregarModelos(){
    this.api.getMotoId().subscribe(
      res => {
        this.motos = res;
        this.motosFiltro = res;
        this.loading = false;
      }
    );
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostraMotos(id_moto) {
      this.api.id_moto = id_moto;
      let dialogRef = this.dialog.open(MotosAnosComponent, {
        width: '600px',
      });
      dialogRef.updatePosition(); 
  }

  aplicaFiltro(value) {
    this.motosFiltro = [];
    this.motosFiltro = this.motos.filter(function (m) {
      return m.name.toUpperCase().includes(value.toUpperCase());
    })
  }
}
import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { MatDialogRef } from '@angular/material';
import { PrintService } from '../print.service';
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
  loading = true;

  constructor(private api: UrlService, public dialogRef: MatDialogRef<CaminhoesModelosComponent>, public print: PrintService, public dialog: MatDialog) { }

  ngOnInit() {
    this.carregarModelos();
  }

  carregarModelos() {
    this.api.getCaminhaoId().subscribe(
      res => {
        this.caminhoes = res;
        this.caminhoesFiltro = res;
        this.loading = false;
      }
    )
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostraCaminhoes(id_caminhao) {
    this.api.id_caminhao = id_caminhao;
    let dialogRef = this.dialog.open(CaminhoesAnosComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }

  aplicaFiltro(value) {
    this.caminhoesFiltro = [];
    this.caminhoesFiltro = this.caminhoes.filter(function (m) {
      return m.name.toUpperCase().includes(value.toUpperCase());
    })
  }
}
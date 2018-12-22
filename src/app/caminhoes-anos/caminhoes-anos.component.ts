import { Component, OnInit } from '@angular/core';
import { PrintService } from '../print.service';
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
  loading = true;

  constructor(private api: UrlService, public dialogRef: MatDialogRef<CaminhoesAnosComponent>, public print: PrintService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getModelos();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  getModelos() {
    this.api.getCaminhoes().subscribe(
      res => {
        this.caminhao = res;
        this.caminhaoFiltro = res;
        this.loading = false;
      }
    )
  }

  mostraDetalhes(id) {
    this.api.id_caminhoes_modelo = id;
    let dialogRef = this.dialog.open(CaminhoesDetalhesComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }

  aplicaFiltro(value) {
    this.caminhaoFiltro = [];
    this.caminhaoFiltro = this.caminhao.filter(function (m) {
      return m.name.toUpperCase().includes(value.toUpperCase());
    })
  }
}
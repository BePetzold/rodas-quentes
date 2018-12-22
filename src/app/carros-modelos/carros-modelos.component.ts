import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { MatDialogRef } from '@angular/material';
import { PrintService } from '../print.service';
import { MatDialog } from '@angular/material';
import { CarrosAnosComponent } from '../carros-anos/carros-anos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carros-modelos',
  templateUrl: './carros-modelos.component.html',
  styleUrls: ['./carros-modelos.component.css']
})

export class CarrosModelosComponent implements OnInit {

  veiculos: any = [];
  veiculosFiltro: any = [];
  loading = true;
  constructor(public api: UrlService, public dialogRef: MatDialogRef<CarrosModelosComponent>, public print: PrintService, public dialog: MatDialog, public actroute: ActivatedRoute, public router: Router) { }


  ngOnInit() {
    this.carregarModelos();
  }

  carregarModelos() {
    this.api.getVeiculosMarca().subscribe(
      res => {
        this.veiculosFiltro = res;
        this.veiculos = res;
        this.loading = false;
      },
    )
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostraAutomovel(id_auto) {
    this.api.id_veiculo = id_auto;
    let dialogRef = this.dialog.open(CarrosAnosComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }

  aplicaFiltro(value) {
    this.veiculosFiltro = [];
    this.veiculosFiltro = this.veiculos.filter(function (m) {
      return m.name.toUpperCase().includes(value.toUpperCase());
    })
  }
}

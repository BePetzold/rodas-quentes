import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { MatDialogRef } from '@angular/material';
import { PrintService } from '../print.service';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carros-detalhes',
  templateUrl: './carros-detalhes.component.html',
  styleUrls: ['./carros-detalhes.component.css']
})

export class CarrosDetalhesComponent implements OnInit {

  detalhe: any = [];
  loading = true;

  constructor(private api: UrlService, public dialogRef: MatDialogRef<CarrosDetalhesComponent>, public print: PrintService, public dialog: MatDialog, public actroute: ActivatedRoute) { }
  ngOnInit() {
    this.getDetalhes();
  }

  getDetalhes() {
    this.api.getDetalhesCar().subscribe(
      res => {
        this.detalhe = res;
        this.loading = false;
      }
    )
  }

  closeDialog() {
    this.dialogRef.close();
  }

  change() {
    this.print.changeData();
  }
}
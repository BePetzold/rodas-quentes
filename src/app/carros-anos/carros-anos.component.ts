import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { MatDialogRef } from '@angular/material';
import { PrintService } from '../print.service';
import { MatDialog } from '@angular/material';
import { CarrosDetalhesComponent } from '../carros-detalhes/carros-detalhes.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carros-anos',
  templateUrl: './carros-anos.component.html',
  styleUrls: ['./carros-anos.component.css']
})

export class CarrosAnosComponent implements OnInit {

  automovel: any = [];
  loading = true;

  constructor(public api: UrlService, public dialogRef: MatDialogRef<CarrosAnosComponent>, public print: PrintService, public dialog: MatDialog, public actroute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.getModelos();
  }
  
  getModelos(){
    this.api.getAutoId().subscribe(
      res => {
        this.automovel = res;
        this.loading = false;
      }
    )
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostraDetalhes(id) {
    this.api.id_carros_modelo = id;
    let dialogRef = this.dialog.open(CarrosDetalhesComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }
}

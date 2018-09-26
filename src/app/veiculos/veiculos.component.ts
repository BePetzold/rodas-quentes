import { Component, OnInit } from '@angular/core';
import { CarrosServiceService } from '../carros-service.service';
import { MatDialogRef } from '@angular/material';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';
import { AutomovelComponent } from '../automovel/automovel.component';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  veiculos: any = [];
  constructor(private api: CarrosServiceService, public dialogRef: MatDialogRef<VeiculosComponent>, private _data: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      this.veiculos = this._data.getVeiculos();
    }, 500);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostraAutomovel(id_auto){
    this._data.setAutomovel(id_auto);
    let dialogRef = this.dialog.open(AutomovelComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }

}

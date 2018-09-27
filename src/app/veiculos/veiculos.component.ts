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
  veiculosFiltro = [];
  constructor(private api: CarrosServiceService, public dialogRef: MatDialogRef<VeiculosComponent>, private _data: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      this.veiculos = this._data.getVeiculos();
      this.veiculosFiltro = this.veiculos;
    }, 500);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostraAutomovel(id_auto){
    if(id_auto != 0){
    this._data.setAutomovel(id_auto);
    let dialogRef = this.dialog.open(AutomovelComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }
}

  aplicaFiltro(value) {
    this.veiculosFiltro = [];
    this.veiculosFiltro = this.veiculos.filter(function (m) {
      return m.name.toUpperCase().startsWith(value.toUpperCase());
    })

  }
}

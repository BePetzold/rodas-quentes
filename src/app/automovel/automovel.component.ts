import { Component, OnInit } from '@angular/core';
import { CarrosServiceService } from '../carros-service.service';
import { MatDialogRef } from '@angular/material';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';
import { DetalhesComponent } from '../detalhes/detalhes.component';

@Component({
  selector: 'app-automovel',
  templateUrl: './automovel.component.html',
  styleUrls: ['./automovel.component.css']
})
export class AutomovelComponent implements OnInit {
  automovel: any = [];
  constructor(private api: CarrosServiceService, public dialogRef: MatDialogRef<AutomovelComponent>, private _data: DataService, public dialog: MatDialog) { }
ngOnInit() {
  setTimeout(() => {
    this.automovel = this._data.getAutomovel();
  }, 500);
}

closeDialog() {
  this.dialogRef.close();
}

mostraDetalhes(id){
  this._data.setDetalhes(id);
  let dialogRef = this.dialog.open(DetalhesComponent, {
    width: '600px',
  });
  dialogRef.updatePosition();
}
}
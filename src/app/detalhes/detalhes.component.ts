import { Component, OnInit } from '@angular/core';
import { CarrosServiceService } from '../carros-service.service';
import { MatDialogRef } from '@angular/material';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  detalhe=[];
  constructor(private api: CarrosServiceService, public dialogRef: MatDialogRef<DetalhesComponent>, private _data: DataService, public dialog: MatDialog) { }
  ngOnInit() {
    setTimeout(() => {
      this.detalhe = this._data.getDetalhes();
    }, 500);
  }
  
  closeDialog() {
    this.dialogRef.close();
  }

}

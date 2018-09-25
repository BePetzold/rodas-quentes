import { Component, OnInit, Input, Inject } from '@angular/core';
import { CarrosServiceService } from '../carros-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, DialogRole} from '@angular/material';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  carros = [];
  @Input() marca: any;
  constructor(private api: CarrosServiceService, public dialogRef: MatDialogRef<VeiculosComponent>) { }

  ngOnInit() {

    // this.api.getVeiculosMarca(this.marca.id).subscribe(res => {
    //   this.carros = res;
    // })

    this.api.getVeiculosMarca(this.marca).subscribe(res => {
      this.carros = res;
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }

}

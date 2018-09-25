import { Component, OnInit, Input, Inject } from '@angular/core';
import { CarrosServiceService } from '../carros-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, DialogRole} from '@angular/material';
import { DataService } from '../data.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  veiculos: any = [];
  constructor(private api: CarrosServiceService, public dialogRef: MatDialogRef<VeiculosComponent>, private data: DataService) { }

  async ngOnInit() {
    await this.delay(300);
    this.veiculos = this.data.getVeiculos();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  async delay(ms: number){
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


  
}

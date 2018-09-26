import { Component, OnInit } from '@angular/core';
import { CarrosServiceService } from '../carros-service.service';
import { MatDialogRef } from '@angular/material';
import { DataService } from '../data.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  veiculos: any = [];
  constructor(private api: CarrosServiceService, public dialogRef: MatDialogRef<VeiculosComponent>, private data: DataService) { }

  ngOnInit() {
    setTimeout(() => {
      this.veiculos = this.data.getVeiculos();
    }, 300);
  }

  closeDialog() {
    this.dialogRef.close();
  }
  
}

import { Component, OnInit } from '@angular/core';
import { CaminhoesService } from '../caminhoes.service';
import { MatDialogRef } from '@angular/material';
import { DataCaminhoesService } from '../data-caminhoes.service';
import { MatDialog } from '@angular/material';
import { CamComponent } from '../cam/cam.component';
// import { MotoComponent } from '../moto/moto.component';
// import { MotosService } from '../motos.service';
// import { DataMotosService } from '../data-motos.service';


@Component({
  selector: 'app-caminhao',
  templateUrl: './caminhao.component.html',
  styleUrls: ['./caminhao.component.css']
})
export class CaminhaoComponent implements OnInit {
  caminhoes: any = [];
  caminhoesFiltro = [];
  constructor(private api: CaminhoesService, public dialogRef: MatDialogRef<CaminhaoComponent>, private _data: DataCaminhoesService, public dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      this.caminhoes = this._data.getCaminhao();
      this.caminhoesFiltro = this.caminhoes;
    }, 550);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostraCaminhoes(id_moto){
    if(id_moto != 0){
    this._data.setCaminhoes(id_moto);
    let dialogRef = this.dialog.open(CamComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }
}


  aplicaFiltro(value) {
    this.caminhoesFiltro = [];
    this.caminhoesFiltro = this.caminhoes.filter(function (m) {
      return m.name.toUpperCase().startsWith(value.toUpperCase());
    })

  }


}

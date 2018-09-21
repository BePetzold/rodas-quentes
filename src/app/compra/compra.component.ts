import { Component, OnInit, Inject } from '@angular/core';
import { CarrosServiceService } from '../carros-service.service';
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css'],
})

export class CompraComponent implements OnInit {

  txtFiltro: string = "";
  marcas = [];
  marcasFiltro = [];

  selected_marca: any = null;

  show: boolean = false;

  constructor(private api: CarrosServiceService) {
  }

  ngOnInit() {
    this.preenArr();
  }

  preenArr() {
    this.api.getMarcas().subscribe(res => {
      this.marcas = res;
      this.sortMarcas();
      this.marcasFiltro = this.marcas.slice(0);
    })
  }

  deleteBool() {
    this.show = !this.show;
  }

  aplicaFiltro(value) {
    this.marcasFiltro = [];

    this.marcasFiltro = this.marcas.filter(function (m) {
      return m.name.toUpperCase().startsWith(value.toUpperCase());
    })

  }

  sortMarcas() {
    this.marcas.sort((left, right): number => {
      if (left.name < right.name) {
        return -1;
      } if (left.name > right.name) {
        return 1;
      }
      return 0;
    })
  }

  deleteMarca(name) {
    this.marcas = this.marcas.filter(function (m) {
      return m.name != name;
    })

    this.updateMarca();
  }

  addMarca(marca) {
    let m = {
      name: marca.toUpperCase(),
      fipe_name: marca.toUpperCase(),
      order: 0,
      key: "",
      id: 0
    }
    this.marcas.push(m);
    this.updateMarca();
  }

  updateMarca() {
    this.sortMarcas();
    this.marcasFiltro = this.marcas.slice(0);
  }

  mostraCarros(marca){
    this.selected_marca = marca;


    // let dialogRef = dialog.open(UserProfileComponent, {
    //   height: '400px',
    //   width: '600px',
    // });
    

  }


  

}

import { Component, OnInit } from '@angular/core';
import { CarrosServiceService } from '../carros-service.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css'],
})
export class CompraComponent implements OnInit {
  carros = [
    { id: 1, marca: "Fiat", modelo: "Bravo", valor: 33000, ano: 2012 },
    { id: 2, marca: "Renault", modelo: "Clio", valor: 15000, ano: 2010 },
    { id: 3, marca: "Chevrolet", modelo: "Camaro", valor: 333000, ano: 2015 },
    { id: 4, marca: "Volkswagen", modelo: "Tiguan", valor: 3000, ano: 1995 },
    { id: 5, marca: "Ford", modelo: "Mustang", valor: 43000, ano: 1885 },
  ];

  marcas = [];
  marcasFiltro = [];

  show: boolean = false;

  constructor(private api: CarrosServiceService) {

  }

  ngOnInit() {
    this.api.getMarcas().subscribe(res => {
      this.marcas = res;
      this.sortMarcas();
      this.marcasFiltro = this.marcas.slice(0);
      console.log(this.marcasFiltro);
    })
  }

  deleteBool() {
    console.log(this.marcas.length);
    this.show = !this.show;
  }

  aplicaFiltro(value){

    this.marcasFiltro = this.marcas.map(function(m) {
      if (m.name.startsWith(value))
        return m;
    })
  }

  sortMarcas(){
    this.marcas.sort((left,right): number =>{
      if(left.name < right.name){
        return -1;
      }if(left.name > right.name){
        return 1;
      }
      return 0;
    })
  }

  deleteMarca(i) {
    this.marcas.splice(i, 1);   
  }
}

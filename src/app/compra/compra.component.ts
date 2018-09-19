import { Component, OnInit } from '@angular/core';
import { CarrosServiceService } from '../carros-service.service';

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
  ]

  marcas: any = [];

  show: boolean = false;

  constructor(private api: CarrosServiceService) {

  }

  ngOnInit() {
    this.api.getMarcas().subscribe(res => {
      this.marcas = res;
      console.log(JSON.stringify(this.marcas));
    })
    let aux: any;
    for (let i=0; i < this.marcas.length; i++){
      if(this.marcas.name[i] < this.marcas.name[i+1]){
        
      }else{

      }
    }
  }

  deleteBool() {
    this.show = !this.show;
  }


  deleteMarca(i) {
    console.log(i)
    this.marcas.splice(i, 1)
    console.log(this.marcas)
  }
}

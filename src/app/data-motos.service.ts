import { Injectable } from '@angular/core';
import { MotosService } from './motos.service';

@Injectable({
  providedIn: 'root'
})

export class DataMotosService {

  carregar = [];
  motos:any = [];
  moto = [];
  // detalhe = [];

  constructor(private api: MotosService) {
    this.preenArr();
  }

  preenArr() {
    this.api.getMarcas().subscribe(res => {
      this.carregar = res;
      this.sortMarcas();
    })
  }

  sortMarcas() {
    this.carregar.sort((left, right): number => {
      if (left.name < right.name) {
        return -1;
      } if (left.name > right.name) {
        return 1;
      }
      return 0;
    })
  }

  deleteMarca(name) {
    this.carregar = this.carregar.filter(function (m) {
      return m.name != name;
    })
    this.sortMarcas();
  }

  changeMarca(marca) {
    this.carregar = marca;
  }

  setMotos(marca) {
    if(marca == 0) {
        this.motos = [{name:'Não há motos cadatradas', id: 0}] ;
    }else{
      this.api.getMotos(marca).subscribe(res =>{
        this.motos = res;
      });
    }
  }

  getMotos(){
    return this.motos;
   }

  setMoto(id) {
    if(id == 0) {
        this.moto = [{name:'Não há motos cadastradas'}];
    }else{
      this.api.getMotoId(id).subscribe(res =>{
        console.log(res);
        this.moto = res;
      });
    }
  }

  getMoto(){
     return this.moto;
   }

  // setDetalhes(id) {
  //   if(id == 0) {
  //       this.detalhe = [{name:'Não há veiculos cadatrados'}];
  //   }else{
  //     this.api.getDetalhes(id).subscribe(res =>{
  //       this.detalhe = res;
  //     });
  //   }
  // }

  // getDetalhes(){
  //   return this.detalhe;
  // }




}

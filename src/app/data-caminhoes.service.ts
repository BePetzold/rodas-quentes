import { Injectable } from '@angular/core';
import { CaminhoesService } from './caminhoes.service';

@Injectable({
  providedIn: 'root'
})
export class DataCaminhoesService {

 
  carregar = [];
  caminhao = [];
  caminhoes = [];
  detalhe;
  constructor(private api: CaminhoesService) {
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

  setCaminhao(id) {
    if(id == 0) {
        this.caminhao = [{name:'Não há motos cadastradas'}];
    }else{
      this.api.getCaminhaoId(id).subscribe(res =>{
        console.log(res);
        this.caminhao = res;
      });
    }
  }

  getCaminhao(){
     return this.caminhao;
   }

   getCaminhoes(){
    return this.caminhoes;
   }

   setCaminhoes(marca) {
    if(marca == 0) {
        this.caminhoes = [{name:'Não há motos cadatradas', id: 0}] ;
    }else{
      this.api.getCaminhoes(marca).subscribe(res =>{
        this.caminhoes = res;
      });
    }
  }

  setDetalhes(id) {
    if(id == 0) {
        this.detalhe = [{name:'Não há veiculos cadatrados'}];
    }else{
      this.api.getCaminhaoDetalhes(id).subscribe(res =>{
        this.detalhe = res;
      });
    }
  }

  getDetalhes(){
    return this.detalhe;
  }

}
import { Injectable } from '@angular/core';
import { CarrosServiceService } from './carros-service.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  carregar = [];
  veiculos:any = [];
  automovel = [];
  detalhe;

  constructor(private api: CarrosServiceService) {
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

  setVeiculos(marca) {
    if(marca == 0) {
        this.veiculos = [{name:'Não há veiculos cadatrados', id: 0}] ;
    }else{
      this.api.getVeiculosMarca(marca).subscribe(res =>{
        this.veiculos = res;
      });
    }
  }

  getVeiculos(){
    return this.veiculos;
  }

  setAutomovel(id) {
    if(id == 0) {
        this.automovel = [{name:'Não há veiculos cadatrados'}];
    }else{
      this.api.getAutoId(id).subscribe(res =>{
        this.automovel = res;
      });
    }
  }

  getAutomovel(){
    return this.automovel;
  }

  setDetalhes(id) {
    if(id == 0) {
        this.detalhe = [{name:'Não há veiculos cadatrados'}];
    }else{
      this.api.getDetalhes(id).subscribe(res =>{
        this.detalhe = res;
      });
    }
  }

  getDetalhes(){
    return this.detalhe;
  }




}

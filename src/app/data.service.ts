import { Injectable } from '@angular/core';
import { CarrosServiceService } from './carros-service.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  carregar = [];
  veiculos:any = []

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
    this.api.getVeiculosMarca(marca).subscribe(res =>{
      this.veiculos = res;
    });
  }

  getVeiculos(){
    return this.veiculos;
  }
}

import { Injectable } from '@angular/core';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  //VARIAVEIS PARA CARROS
  carregar_carros: any = [];
  veiculos: any = [];
  automovel: any = [];
  detalhe_carros: any = [];

  //VARIAVEIS PARA MOTOS
  carregar_motos: any = [];
  motos: any = [];
  moto: any = [];
  detalhe_motos: any = [];

  //VARIAVEIS PARA CAMINHOES
  carregar_caminhoes: any = [];
  caminhao: any = [];
  caminhoes: any = [];
  detalhe_caminhoes: any = [];

  constructor(private api: UrlService) {
    this.preenArrCar();
    this.preenArrMot();
    this.preenArrCam();
  }

  //CARREGAR CARROS
  preenArrCar() {
    this.api.getMarcasCar().subscribe(res => {
      this.carregar_carros = res;
      this.sortMarcasCar();
    })
  }

  //CARREGAR MOTOS
  preenArrMot() {
    this.api.getMarcasMot().subscribe(res => {
      this.carregar_motos = res;
      this.sortMarcasMot();
    })
  }

  //CARREGAR CAMINHOES
  preenArrCam() {
    this.api.getMarcasCam().subscribe(res => {
      this.carregar_caminhoes = res;
      this.sortMarcasCam();
    })
  }

  //METODOS PARA CARROS
  sortMarcasCar() {
    this.carregar_carros.sort((left, right): number => {
      if (left.name < right.name) {
        return -1;
      } if (left.name > right.name) {
        return 1;
      }
      return 0;
    })
  }
  setVeiculos(marca) {
    if (marca == 0) {
      this.veiculos = [{ name: 'Não há veiculos cadatrados', id: 0 }];
    } else {
      this.api.getVeiculosMarca(marca).subscribe(res => {
        this.veiculos = res;
      });
    }
  }
  getVeiculos() {
    return this.veiculos;
  }
  setAutomovel(id) {
    if (id == 0) {
      this.automovel = [{ name: 'Não há veiculos cadatrados' }];
    } else {
      this.api.getAutoId(id).subscribe(res => {
        this.automovel = res;
      });
    }
  }
  getAutomovel() {
    return this.automovel;
  }
  setDetalhesCar(id) {
    if (id == 0) {
      this.detalhe_carros = [{ name: 'Não há veiculos cadatrados' }];
    } else {
      this.api.getDetalhesCar(id).subscribe(res => {
        this.detalhe_carros = res;
      });
    }
  }
  getDetalhesCar() {
    return this.detalhe_carros;
  }

  //METODOS PARA MOTOS
  sortMarcasMot() {
    this.carregar_motos.sort((left, right): number => {
      if (left.name < right.name) {
        return -1;
      } if (left.name > right.name) {
        return 1;
      }
      return 0;
    })
  }
  setMotos(marca) {
    if (marca == 0) {
      this.motos = [{ name: 'Não há motos cadatradas', id: 0 }];
    } else {
      this.api.getMotoneta(marca).subscribe(res => {
        this.motos = res;
      });
    }
  }
  getMotos() {
    return this.motos;
  }
  setMoto(id) {
    if (id == 0) {
      this.moto = [{ name: 'Não há motos cadastradas' }];
    } else {
      this.api.getMotoId(id).subscribe(res => {
        this.moto = res;
      });
    }
  }
  getMoto() {
    return this.moto;
  }
  setDetalhesMot(id) {
    if (id == 0) {
      this.detalhe_motos = [{ name: 'Não há veiculos cadatrados' }];
    } else {
      this.api.getMotoDetalhes(id).subscribe(res => {
        this.detalhe_motos = res;
      });
    }
  }
  getDetalhesMot() {
    return this.detalhe_motos;
  }

  //METODOS PARA CAMINHOES
  sortMarcasCam() {
    this.carregar_caminhoes.sort((left, right): number => {
      if (left.name < right.name) {
        return -1;
      } if (left.name > right.name) {
        return 1;
      }
      return 0;
    })
  }
  setCaminhao(id) {
    if (id == 0) {
      this.caminhao = [{ name: 'Não há motos cadastradas' }];
    } else {
      this.api.getCaminhaoId(id).subscribe(res => {
        this.caminhao = res;
      });
    }
  }
  getCaminhao() {
    return this.caminhao;
  }
  getCaminhoes() {
    return this.caminhoes;
  }
  setCaminhoes(marca) {
    if (marca == 0) {
      this.caminhoes = [{ name: 'Não há motos cadatradas', id: 0 }];
    } else {
      this.api.getCaminhoes(marca).subscribe(res => {
        this.caminhoes = res;
      });
    }
  }
  setDetalhesCam(id) {
    if (id == 0) {
      this.detalhe_caminhoes = [{ name: 'Não há veiculos cadatrados' }];
    } else {
      this.api.getCaminhaoDetalhes(id).subscribe(res => {
        this.detalhe_caminhoes = res;
      });
    }
  }
  getDetalhesCam() {
    return this.detalhe_caminhoes;
  }
}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UrlService {

  url_carros = 'https://fipeapi.appspot.com/api/1/carros/marcas.json';
  private id_marca_carros: string;
  private id_veiculo: string;

  url_motos = 'https://fipeapi.appspot.com/api/1/motos/marcas.json';
  private id_marca_motos: string;
  private id_moto: string;

  url_caminhoes = 'https://fipeapi.appspot.com/api/1/caminhoes/marcas.json';
  private id_marca_caminhoes: string;
  private id_caminhao: string;

  constructor(private http: Http) { }

  //CARROS
  getMarcasCar(): Observable<any> {
    return this.http.get(this.url_carros).pipe(map((res: Response) => res.json()));
  }
  getVeiculosMarca(id_marca: string): Observable<any> {
    let url_query = 'https://fipeapi.appspot.com/api/1/carros/veiculos/' + id_marca + '.json';
    this.id_marca_carros = id_marca;
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
  getAutoId(id_veiculo: string): Observable<any> {
    let url_query = 'https://fipeapi.appspot.com/api/1/carros/veiculo/' + this.id_marca_carros + '/' + id_veiculo + '.json';
    this.id_veiculo = id_veiculo;
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
  getDetalhesCar(id_automovel: string): Observable<any> {
    let url_query = 'https://fipeapi.appspot.com/api/1/carros/veiculo/' + this.id_marca_carros + '/' + this.id_veiculo + '/' + id_automovel + '.json';
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }

  //MOTOS
  getMarcasMot(): Observable<any> {
    return this.http.get(this.url_motos).pipe(map((res: Response) => res.json()));
  }
  getMarcaMotos(id_moto: string): Observable<any> {
    let url_query = 'https://fipeapi.appspot.com/api/1/motos/marcas.json';
    this.id_moto = id_moto;
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
  getMotoId(id_marca: string): Observable<any> {
    let url_query = 'https://fipeapi.appspot.com/api/1/motos/veiculos/' + id_marca + '.json';
    this.id_marca_motos = id_marca;
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
  getMotoneta(id_moto: string): Observable<any> {
    let url_query = 'https://fipeapi.appspot.com/api/1/motos/veiculo/' + this.id_marca_motos + '/' + id_moto + '.json';
    this.id_moto = id_moto;
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
  getMotoDetalhes(id_modelo: string): Observable<any> {
    let url_query = 'https://fipeapi.appspot.com/api/1/motos/veiculo/' + this.id_marca_motos + '/' + this.id_moto + '/' + id_modelo + '.json';
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }

  //CAMINHOES
  getMarcasCam(): Observable<any> {
    return this.http.get(this.url_caminhoes).pipe(map((res: Response) => res.json()));
  }
  getCaminhaoId(id_marca: string): Observable<any> {
    this.id_marca_caminhoes = id_marca;
    let url_query = 'https://fipeapi.appspot.com/api/1/caminhoes/veiculos/' + id_marca + '.json';

    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
  getCaminhoes(id_caminhao: string): Observable<any> {
    this.id_caminhao = id_caminhao;
    let url_query = 'https://fipeapi.appspot.com/api/1/caminhoes/veiculo/' + this.id_marca_caminhoes + '/' + id_caminhao + '.json';
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
  getCaminhaoDetalhes(id_modelo: string): Observable<any> {
    let url_query = 'https://fipeapi.appspot.com/api/1/caminhoes/veiculo/' + this.id_marca_caminhoes + '/' + this.id_caminhao + '/' + id_modelo + '.json';
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
}
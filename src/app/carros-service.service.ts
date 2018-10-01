import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarrosServiceService {

  url = 'https://fipeapi.appspot.com/api/1/carros/marcas.json';
  private id_marca: string;
  private id_veiculo: string;
  constructor(private http: Http) { }

  getMarcas(): Observable<any> {
    return this.http.get(this.url).pipe(map((res: Response) => res.json()));
  }

  getVeiculosMarca(id_marca: string): Observable<any>{
    let url_query = 'https://fipeapi.appspot.com/api/1/carros/veiculos/' + id_marca + '.json';
    this.id_marca = id_marca;
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }

  getAutoId(id_veiculo: string): Observable<any>{
    let url_query = 'https://fipeapi.appspot.com/api/1/carros/veiculo/' + this.id_marca + '/' + id_veiculo + '.json';
    this.id_veiculo = id_veiculo;
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }

  getDetalhes(id_automovel: string): Observable<any>{
    let url_query = 'https://fipeapi.appspot.com/api/1/carros/veiculo/' + this.id_marca + '/' + this.id_veiculo + '/' + id_automovel + '.json';
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }


}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CaminhoesService {

  url = 'http://fipeapi.appspot.com/api/1/caminhoes/marcas.json';
  private id_marca: string;
  private id_caminhao: string;

  constructor(private http: Http) { }

  getMarcas(): Observable<any> {
    return this.http.get(this.url).pipe(map((res: Response) => res.json()));
  }

  getCaminhaoId(id_marca: string): Observable<any>{
    let url_query = 'http://fipeapi.appspot.com/api/1/caminhoes/veiculos/'  + id_marca + '.json';
    this.id_marca = id_marca;
     return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }

  
  getCaminhoes(id_caminhao: string): Observable<any>{
    let url_query = 'http://fipeapi.appspot.com/api/1/caminhoes/veiculo/' + this.id_marca + '/' + id_caminhao + '.json';
    this.id_caminhao = id_caminhao;
   return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }

  

  getCaminhaoDetalhes(id_modelo: string): Observable<any>{
    let url_query = 'http://fipeapi.appspot.com/api/1/camihoes/veiculo/' + this.id_marca + '/' + this.id_caminhao + '/' + id_modelo + '.json';
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }

}
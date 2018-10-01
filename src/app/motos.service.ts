import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MotosService {

  url = 'https://fipeapi.appspot.com/api/1/motos/marcas.json';
  private id_marca: string;
  private id_motos: string;
  private id_moto: string;
  private id_modelo: string;
   private id_motoneta: string;
  constructor(private http: Http) { }

  getMarcas(): Observable<any> {
    return this.http.get(this.url).pipe(map((res: Response) => res.json()));
  }
  getMarcaMotos(id_moto: string): Observable<any>{
    let url_query = 'https://fipeapi.appspot.com/api/1/motos/marcas.json';
    this.id_moto = id_moto;
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }

  getMotoId(id_marca: string): Observable<any>{
    let url_query = 'https://fipeapi.appspot.com/api/1/motos/veiculos/' + id_marca + '.json';
    this.id_marca = id_marca;
     return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
  
  getMotoneta(id_moto: string): Observable<any>{
     let url_query = 'https://fipeapi.appspot.com/api/1/motos/veiculo/' + this.id_marca + '/' + id_moto + '.json';
     this.id_moto = id_moto;
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
   }

   getMotoDetalhes(id_modelo: string): Observable<any>{
    let url_query = 'https://fipeapi.appspot.com/api/1/motos/veiculo/' + this.id_marca + '/' + this.id_moto + '/' + id_modelo + '.json';
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }

}
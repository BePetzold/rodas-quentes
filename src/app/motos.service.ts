import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MotosService {

  url = 'http://fipeapi.appspot.com/api/1/motos/marcas.json';
  private id_marca: string;
  private id_motos: string;
  private id_moto: string;
  constructor(private http: Http) { }

  getMarcas(): Observable<any> {
    return this.http.get(this.url).pipe(map((res: Response) => res.json()));
  }
  getMotos(id_moto: string): Observable<any>{
    let url_query = 'http://fipeapi.appspot.com/api/1/motos/marcas.json';
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
  getMotoId(id_motos: string): Observable<any>{

    let url_query = 'http://fipeapi.appspot.com/api/1/motos/veiculos/' + id_motos + '.json';
    this.id_motos = id_motos;
     return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
  
  getAutoId(id_moto: string): Observable<any>{
    let url_query = 'http://fipeapi.appspot.com/api/1/motos/veiculo/' + this.id_marca + '/' + id_moto + '.json';
    this.id_moto = id_moto;
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
}

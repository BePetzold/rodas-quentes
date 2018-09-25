import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarrosServiceService {

  url = 'http://fipeapi.appspot.com/api/1/carros/marcas.json';

  constructor(private http: Http) { }

  getMarcas(): Observable<any> {
    return this.http.get(this.url).pipe(map((res: Response) => res.json()));
  }

  getVeiculosMarca(id_marca: string): Observable<any>{
    let url_query = 'http://fipeapi.appspot.com/api/1/carros/veiculos/' + id_marca + '.json';
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
}

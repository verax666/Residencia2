import { Injectable, OnInit } from '@angular/core';
import { Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Pais } from './Paises';


@Injectable({
  providedIn: 'root'
})
export class ObtPaisesService {

  constructor(private http: HttpClient) { }
  
  obtpais():Observable<Pais[]>{
    return  this.http
    .get<Pais[]>("../../assets/Localidades/Pais.json");
  }

}

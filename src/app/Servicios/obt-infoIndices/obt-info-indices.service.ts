import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Indice } from './Info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtInfoIndicesService {

  constructor(private http: HttpClient) { }

  obtf(): Observable<Indice[]>{
    return this.http.get<Indice[]>("../assets/Infos/Info-Indices.json");
      }
}

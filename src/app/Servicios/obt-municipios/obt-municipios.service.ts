import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Municipios } from './Municipios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtMunicipiosService {

  constructor(private http: HttpClient) { }

  obtm(P,Est):Observable<Municipios[]>{
return this.http.get<Municipios[]>("../assets/Localidades/"+P+"/"+Est+"/"+Est+".json");

  }


}

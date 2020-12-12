import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Estados } from './Estados';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtEstadosService {

  constructor(private http: HttpClient) { }
 
  obtE(Pais): Observable<Estados[]>{
return this.http.get<Estados[]>("../assets/Localidades/"+Pais+"/Estados.json");
  }

}

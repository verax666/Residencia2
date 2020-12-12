import { Injectable } from '@angular/core';
import { from, Observable} from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pollutants } from './Pollutants';
import { Platform, ToastController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { AngularFireDatabase } from '@angular/fire/database';
import { finalize, map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ServicePollutService {
  itemref:any;
  Day=new Date().getDate();
  Month=new Date().getMonth()+1;
  Year = new Date().getFullYear();
  items:Observable<any[]>;
 Date = this.Year+""+this.Month+""+this.Day;

  constructor(
    public toastController: ToastController,
    private db:AngularFireDatabase
   ) {  }

  Pollutants(){
  return from(this.obtfire())
}


obtfire(){
this.itemref = this.db.object(this.Date);
let d= this.itemref.snapshotChanges();
return d;
}
  
//../../../assets/Stations/"+city+"/"+"P"+day+"-"+month+"-"+year+".json
//https://examplet4t.000webhostapp.com/Stations"+city+"/"+"P"+day+"-"+month+"-"+year+".json
/*Graph(city:any,day:any,month:any,year:any):Observable<Pollutants[]>{
  return  this.http
  .get<Pollutants[]>("https://examplet4t.000webhostapp.com/Stations"+city+"/"+"P"+day+"-"+month+"-"+year+".json");
}*/

}

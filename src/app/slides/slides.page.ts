import { Component, OnInit } from '@angular/core';
import { ObtPaisesService } from '../Servicios/obt-paises/obt-paises.service';
import { ObtEstadosService } from '../Servicios/obt-estados/obt-estados.service';
import { ObtMunicipiosService } from '../Servicios/obt-municipios/obt-municipios.service';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  private onDestroy$ = new Subject<void>(); 

  r:boolean;
 public Pais = [];
 public Estados = [];
 public Municipios = [];

 Paisn: string;
 Estadon:string;
 Municipion:string;
it ={
  "NO2":0,"03":0.019,"PM2.5":50,SO2:0.005,"PM10":57,"CO":2.11,Location:"Monterrey, Nuevo León, México"}
;

items: any[]=[
{"name": "Particulas 2.5","src": "../../assets/imgs/particule 2.5 & 10 pm.gif"},
{"name": "Particulas 10","src": "../../assets/imgs/particule 2.5 & 10 pm.gif"},
{"name": "Ozono O3","src": "../../assets/imgs/ozono.gif"},
{"name": "Monóxido de carbono CO","src": "../../assets/imgs/ozono.gif"},
{"name": "Dióxido de nitrógeno NO2","src": "../../assets/imgs/ozono.gif"},
{"name": "Dioxido de azufre SO2","src": "../../assets/imgs/ozono.gif"},
                ];
  constructor(private obtpservice: ObtPaisesService,
              private obteservice: ObtEstadosService,
              private obtmservice: ObtMunicipiosService) { }

  ngOnInit() {
    this.obtpservice.obtpais().pipe(takeUntil(this.onDestroy$)).subscribe((data) =>this.Pais = data);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(); 
    this.onDestroy$.complete();    
  }
  endslide(){
    document.getElementById("footer").style.display="block";
    }

    obtest(Paisselect){
      if(Paisselect===undefined){
      }else{
      this.obteservice.obtE(Paisselect).pipe(takeUntil(this.onDestroy$)).subscribe((data) => this.Estados = data);
      document.getElementById("Estado").style.display= "block"}
    }

    obtmunicipios(Paisselect,Estadoselect){
      if(Paisselect===undefined || Estadoselect===undefined){}else{
      this.obtmservice.obtm(Paisselect,Estadoselect).pipe(takeUntil(this.onDestroy$)).subscribe((data)=> this.Municipios = data);
      document.getElementById("Municipios").style.display = "block";
      document.getElementById("list-m").style.display = "block";
      document.getElementById("btn-acept").style.display = "block";
    }
    }

      
           

}

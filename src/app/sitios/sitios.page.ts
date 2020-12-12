import { Component, OnInit } from '@angular/core';
import { ServicePollutService } from '../Servicios/obt-pollutants/service-pollut.service';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { UsaqiPipe } from '../Pipes/US AQI/usaqi.pipe';


@Component({
  selector: 'app-sitios',
  templateUrl: './sitios.page.html',
  styleUrls: ['./sitios.page.scss'],
})
export class SitiosPage implements OnInit {
  private onDestroy$ = new Subject<void>(); 
  zona=false;
  loading=true;
  Zona = [];
  AQI;
Hour=new Date().getHours()+":00";

  constructor(private pollutants:ServicePollutService, private usaqi: UsaqiPipe) { 
  }
    ngOnInit() {
      setTimeout(() => {
        this.Hour=new Date().getHours()+":00";
      }, 600000);
this.pollutants.Pollutants().pipe(takeUntil(this.onDestroy$),finalize(()=>{
})).subscribe(action=>{
  let f=[];
  f.push(action);
  for(let i of f){
    this.Zona.push(i.payload.val())
  }
  this.zona=true;
  this.loading=false;
  this.AQI= this.usaqi.transform(this.Zona,this.Hour);
  });
}
ngOnDestroy(): void {
  this.onDestroy$.next();
  this.onDestroy$.complete();
}
}

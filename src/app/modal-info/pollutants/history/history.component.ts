import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ServicePollutService } from 'src/app/Servicios/obt-pollutants/service-pollut.service';
import { Subject } from 'rxjs/internal/Subject';
import { finalize, takeUntil } from 'rxjs/operators';
import { GraphicPipe } from '../../../Pipes/Graphic/graphic.pipe';
import { PM10Pipe } from 'src/app/Pipes/PM10/pm10.pipe';
import { SO2Pipe } from 'src/app/Pipes/SO2/so2.pipe';
import { PM25Pipe } from 'src/app/Pipes/pm25/pm25.pipe';
import { O3Pipe } from 'src/app/Pipes/O3/o3.pipe';
import { CoPipe } from 'src/app/Pipes/CO/co.pipe';
import { No2Pipe } from 'src/app/Pipes/NO2/no2.pipe';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  private onDestroy$ = new Subject<void>(); 
@Input("P") P:string;
@Input("city") city:string;
Datos =[];
  HoraD:any;
  Values:any;
  Colors:any;
  chart;
  Hora = new Date().getHours();
  Month = new Date().getMonth();
  Day = new Date().getDate();
  Year = new Date().getFullYear();
  constructor(private servp:ServicePollutService,
              private GrapPipe:GraphicPipe,
              private PM10:PM10Pipe,
              private S02: SO2Pipe,
              private PM25: PM25Pipe,
              private O3: O3Pipe,
              private CO:CoPipe,
              private NO2: No2Pipe
            ) { }

            ngOnChanges(changes): void {
              this.CHECK();
            }
            ngOnDestroy(): void {
              
            }
           
 addData(chart, label, data,colors) {
  chart.data.labels = label;
  chart.data.datasets.forEach((dataset) => {
   
      dataset.data =data;
      dataset.backgroundColor =(colors);
      
  });
  chart.update();
}

 removeData(chart) {
  chart.data.labels=[];
  chart.data.datasets.forEach((dataset) => {
  dataset.data=[];
 dataset.backgroundColor=[];
});
chart.update();
   this.addData(this.chart,this.HoraD,this.Values,this.Colors);
}

createChart(){
 if(this.chart){
 }
 else{
    this.chart = new Chart('canvas',{
    type:"bar",
    data:{
      labels:this.HoraD,
      datasets:[{
        data:this.Values,
        backgroundColor: this.Colors,
      borderColor: [],
      borderWidth: 1
      }]
    },
    options: {
      legend:{
        display:false
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
}) }}

CHECK(){
  if(this.Datos.length==0){}
  else{
  switch (this.P) {
    case "P.M. 10":
     this.HoraD = this.GrapPipe.transform(this.Datos,this.Hora,'PM10');
     this.Values = this.GrapPipe.resv; 
     this.Colors= this.PM10.transform(this.Values)
      break;
      case "P.M. 2.5":
       this.HoraD = this.GrapPipe.transform(this.Datos,this.Hora,'PM25');
       this.Values = this.GrapPipe.resv; 
       this.Colors= this.PM25.transform(this.Values)
        break;
        case "O3":
         this.HoraD = this.GrapPipe.transform(this.Datos,this.Hora,'O3');
         this.Values = this.GrapPipe.resv; 
         this.Colors= this.O3.transform(this.Values)
          break;
          case "NO2":
           this.HoraD = this.GrapPipe.transform(this.Datos,this.Hora,'NO2');
           this.Values = this.GrapPipe.resv; 
           this.Colors= this.NO2.transform(this.Values)
            break;
            case "SO2":
             this.HoraD = this.GrapPipe.transform(this.Datos,this.Hora,'SO2');
             this.Values = this.GrapPipe.resv; 
             this.Colors= this.S02.transform(this.Values)
              break;
              case "CO":
               this.HoraD = this.GrapPipe.transform(this.Datos,this.Hora,'CO');
               this.Values = this.GrapPipe.resv; 
               this.Colors= this.CO.transform(this.Values)
                break;
    default:
      break;
     
  }
  if(this.chart){
  this.removeData(this.chart);
  }else{
  this.createChart();
  }
  }
 
}
  ngOnInit() {
    this.ver();
  }

  ver(){
    if(this.verHour()){
      if(this.verDay()){
       console.log( this.diasEnUnMes(this.Month,this.Year));
   
        this.Month-1;
    if(this.verMonth()){
      this.Month=11;
      this.diasEnUnMes(this.Month,this.Year)
     this.Year-1;
    }
   }
   }else{
   this.dayN();
    }
   }
   
   verHour(){
     if(this.Hora<5  && this.Hora >= 0){
       return true;
     }else{
       return false;
     }
   }
   verMonth(){
     if(this.Month==0){
       return true;
     }else{
       return false;
     }
   }
   verDay(){
     if(this.Day==1){
       return true;
     }else{
       return false;
     }
   }
    diasEnUnMes(mes, año) {
     return new Date(año, mes, 0).getDate();
   }
   
    dayN(){
     this.servp.Pollutants().pipe(takeUntil(this.onDestroy$),finalize(()=>{
      this.CHECK()
     })).subscribe(data =>{
      let f=[];
      f.push(data);
      for(let i of f){ 
      this.Datos =(i.payload.val());
    }
    this.onDestroy$.next();
    this.onDestroy$.complete();
    }
    ) 
    }

}

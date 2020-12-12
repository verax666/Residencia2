import { Pipe, PipeTransform, ɵConsole } from '@angular/core';
import { element } from 'protractor';

@Pipe({
  name: 'usaqi'
})
export class UsaqiPipe implements PipeTransform {

  transform(value:any,hora:any) {
    let PM2 ;
    if(hora.split(":",1)<10){
      hora =0+""+hora;
     }else{}
    for(let element of value){
     for(let items of element){
      if(items.Hora == hora){
        PM2 = items.PM25;
      }
    }
    }
    let k;
    let l;
    let indice;
       switch (true) {
      case PM2 <= 12.0:
        k = (50-0)/(12.0-0);
        indice = k *(PM2-0)+0;
        break;
      case PM2 >=12.1 && PM2 <= 45.4 :
        k = (100-51)/(35.4-12.1);
        indice = k *(PM2-12.1)+51; // k *(indice contaminante - indice ICA) + RANGO MENOR INDICE
        break;
      case PM2 >= 35.5 && PM2 <= 55.4:
        k = (150-101)/(55.4-35.5);
        indice = (k*(PM2-35.5))+101;
        break;
      case PM2 >= 55.5 && PM2 <= 150.4: 
      k = (200-151)/(150.4-55.5);
      indice = k *(PM2-55.5)+151;
        break;
      case PM2 >= 150.5 && PM2 <= 250.4:
        k = (300-201)/(250.4-150.5);
        indice = k *(PM2-150.5)+201;
        break;
      case PM2 >= 250 && PM2 <=500.4:
        k = (500-301)/(500.4-250.5);
        indice = k *(PM2-250.5)+301;
        break;
      default:
        break;
    }
    return Math.round(indice);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'graphic'
})
export class GraphicPipe implements PipeTransform {
   resv=[];
  transform(value:any, arg: any,S:any) {
    let res= [];
    this.resv =[];
    for(let i of value){
      if(i.Hora.split(":",1) <= arg){
        
        res.push(i.Hora);

        this.resv.push(i[S]);
      }
    }
    return res;
  }


}

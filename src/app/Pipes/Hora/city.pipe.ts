import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(value: any,arg:any) {
    const res = [];
   if(arg.split(":",1)<10){
    arg =0+""+arg;
    
   }else{}
    for(const post of value){
      if(post.Hora == arg){
        res.push(post);
      }
    }
  return res;
  }
  

}

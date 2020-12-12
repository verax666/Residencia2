import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sO2'
})
export class SO2Pipe implements PipeTransform {

  transform(value:any) {
    let color = [];
    for( let items of value){
      switch (true) {
        case items <= .008:
          color.push("rgb(0,228,0)");
          break;
        case items >.008 && items <=.110:
          color.push("rgb(255,255,0)");
          break;
        case items >.110 && items <=.165:
          color.push("rgb(255,126,0)");
          break;
        case items >.165 && items <=.220:
          color.push("rgb(255,0,0)");
          break;
        case items >.220:
            color.push("rgb(143,63,151)");
            break;
        default:
          break;
      }

    }

    return color;
  }

}

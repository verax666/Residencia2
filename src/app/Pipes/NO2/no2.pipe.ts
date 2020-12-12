import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'no2'
})
export class No2Pipe implements PipeTransform {

  transform(value: any) {
    let color = [];
    for( let items of value){
      switch (true) {
        case items <= .107:
          color.push("rgb(0,228,0)");
          break;
        case items >.107 && items <=.210:
        color.push("rgb(255,255,0)");
        break;
        case items >.210 && items <=.230:
        color.push("rgb(255,126,0)");
        break;
        case items >.230 && items <=.250:
        color.push("rgb(255,0,0)");
        break;
        case items >.250:
          color.push("rgb(143,63,151)");
        break;
        default:
          break;
      }
    }
    return color;
  }
}

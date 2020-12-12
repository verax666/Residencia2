import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'co'
})
export class CoPipe implements PipeTransform {

  transform(value: any) {
    let color = [];
    for( let items of value){
      switch (true) {
        case items <= 8.75:
          color.push("rgb(0,228,0)");
          break;
        case items > 8.75 && items <=11.00:
          color.push("rgb(255,255,0)");
          break;
        case items >11.00 && items <=13.30:
          color.push("rgb(255,126,0)");
          break;
        case items >13.30 && items <=15.50:
          color.push("rgb(255,0,0)");
          break;
        case items >15.50:
          color.push("rgb(143,63,151)");
          break;
        default:
          break;
      }

    }

    return color;
  }

}

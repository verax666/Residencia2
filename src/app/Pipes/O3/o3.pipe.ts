import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'o3'
})
export class O3Pipe implements PipeTransform {

  transform(value: any) {
    let color = [];
    for( let items of value){
      switch (true) {
        case items <= .051:
          color.push("rgb(0,228,0)");
          break;
        case items >.051 && items <=.095:
        color.push("rgb(255,255,0)");
        break;
        case items >.095 && items <=.135:
        color.push("rgb(255,126,0)");
        break;
        case items >.135 && items <=.175:
        color.push("rgb(255,0,0)");
        break;
        case items >.175:
          color.push("rgb(143,63,151)");
        break;
        default:
          break;
      }

    }

    return color;
  }

}

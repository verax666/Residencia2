import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pM25'
})
export class PM25Pipe implements PipeTransform {

  transform(value: any) {
    let color = [];
    for( let items of value){
      switch (true) {
        case items <= 25:
          color.push("rgb(0,228,0)");
          break;
        case items >25 && items <=45:
          color.push("rgb(255,255,0)");
          break;
        case items >45 && items <=79:
          color.push("rgb(255,126,0)");
          break;
        case items >79 && items <=147:
          color.push("rgb(255,0,0)");
          break;
        case items >=147:
          color.push("rgb(143,63,151)");
          break;
        default:
          break;
      }

    }

    return color;
  }

}

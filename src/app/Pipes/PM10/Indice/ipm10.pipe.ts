import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ipm10'
})
export class Ipm10Pipe implements PipeTransform {

  transform(value: any) {
    let color="";
    switch (true) {
      case value <= 50:
        color="Green";
        break;
    case value >50 && value <=75:
      color="Yellow";
    break;
    case value >75 && value <=155:
      color="Orange";
    break;
    case value >155 && value <=235:
      color="Red";
      break;
      case value >=236:
        color ="Purple";
      break;
      default:
        break;
    }
    return color;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ipm25'
})
export class Ipm25Pipe implements PipeTransform {

  transform(value) {
    let color ="";
    switch (true) {
      case value <= 25:
        color="Green";
        break;
      case value >25 && value <=45:
        color="Yellow";
        break;
      case value >45 && value <=79:
        color="Orange";
        break;
      case value >79 && value <=147:
        color="Red";
        break;
      case value >=147:
        color="Purple";
        break;
      default:
        break;
    }

    return color;
  }

}

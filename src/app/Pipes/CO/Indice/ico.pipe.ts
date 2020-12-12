import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ico'
})
export class IcoPipe implements PipeTransform {


  transform(value: any) {
    let color = "";
      switch (true) {
        case value <= 8.75:
          color="Green";
          break;
        case value > 8.75 && value <=11.00:
          color="Yellow";
          break;
        case value >11.00 && value <=13.30:
          color="Orange";
          break;
        case value >13.30 && value <=15.50:
          color="Red";
          break;
        case value >15.50:
          color="Purple";
          break;
        default:
          break;
      }
    return color;
  }
}

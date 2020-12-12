import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iso2'
})
export class Iso2Pipe implements PipeTransform {

  transform(value:any) {
    let color = "";
   
      switch (true) {
        case value <= .008:
          color="Green";
          break;
        case value >.008 && value <=.110:
          color="Yellow";
          break;
        case value >.110 && value <=.165:
          color="Orange";
          break;
        case value >.165 && value <=.220:
          color="Red";
          break;
        case value >.220:
          color="Purple";
          break;
        default:
          break;
      }

    return color;
  }

}

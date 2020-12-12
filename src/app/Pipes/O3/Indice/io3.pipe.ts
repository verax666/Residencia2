import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'io3'
})
export class Io3Pipe implements PipeTransform {

  transform(value: any) {
    let color = "";
  
      switch (true) {
        case value <= .051:
          color="Green";
          break;
        case value >.051 && value <=.095:
        color="Yellow";
        break;
        case value >.095 && value <=.135:
        color="Orange";
        break;
        case value >.135 && value <=.175:
        color="Red";
        break;
        case value >.175:
          color="Purple";
        break;
        default:
          break;
      }

    return color;
  }
}

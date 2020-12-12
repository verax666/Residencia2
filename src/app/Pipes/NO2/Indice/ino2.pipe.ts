import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ino2'
})
export class Ino2Pipe implements PipeTransform {

  transform(value: any) {
    let color = "";
      switch (true) {
        case value <= .107:
          color="Green";
          break;
        case value >.107 && value <=.210:
          color="Yellow";
          break;
        case value >.210 && value <=.230:
          color="Orange";
          break;
        case value >.230 && value <=.250:
          color="Red";
          break;
        case value >.250:
          color="Purple";
          break;
        default:
          break;
      }
    
    return color;
  }
}

import { NgSwitch } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pM10'
})
export class PM10Pipe implements PipeTransform {

  transform(value: any) {
    let color = [];
    for( let items of value){
      switch (true) {
        case items <= 50:{
          color.push("rgb(0,228,0)");
          break;
                                    }
      case items >50 && items <=75:{
        color.push("rgb(255,255,0)");
      break;
                                  }
      case items >75 && items <=155:{
        color.push("rgb(255,126,0)");
      break;
                                    }
      case items >155 && items <=235:{
        color.push("rgb(255,0,0)");
        break;
                                    }
        case items >=236:{
          color.push("rgb(143,63,151)");
        break;
        }
        default:
          break;
      }

    }

    return color;
  }

}

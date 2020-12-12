import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PM10 } from './Pollutants/PM10';
import { PM25 } from './Pollutants/PM25';
import { O3 } from './Pollutants/O3';
import { SO2 } from './Pollutants/so2';
import { NO2 } from './Pollutants/NO2';
import { CO } from './Pollutants/CO';

@Component({
  selector: 'app-info-pollutants',
  templateUrl: './info-pollutants.component.html',
  styleUrls: ['./info-pollutants.component.scss'],
})
export class InfoPollutantsComponent implements OnInit {
  @Input("P") P;
  
 
  constructor() { }
  
  pm10 =PM10.items;
  pm25 = PM25.items;
  o3 = O3.items;
  so2 = SO2.items;
  no2 = NO2.items;
  co =CO.items;

  ngOnInit() {


  }

}

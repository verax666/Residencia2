import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicPipe } from '../Graphic/graphic.pipe';
import { PM10Pipe } from '../PM10/pm10.pipe';
import { SO2Pipe } from '../SO2/so2.pipe'; 
import { PM25Pipe } from '../pm25/pm25.pipe';
import { O3Pipe } from '../O3/o3.pipe';
import { CoPipe } from '../CO/co.pipe'
import { No2Pipe } from '../NO2/no2.pipe';


@NgModule({
  declarations: [GraphicPipe,PM10Pipe,SO2Pipe,PM25Pipe,O3Pipe,CoPipe,No2Pipe],
  imports: [
    CommonModule
  ],
  providers:[GraphicPipe,PM10Pipe,SO2Pipe,PM25Pipe,O3Pipe,CoPipe,No2Pipe],
  exports:[GraphicPipe,PM10Pipe,SO2Pipe,PM25Pipe,O3Pipe,CoPipe,No2Pipe]
})
export class GraphicPipeModule { }

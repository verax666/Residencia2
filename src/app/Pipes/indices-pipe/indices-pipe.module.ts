import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ino2Pipe } from '../NO2/Indice/ino2.pipe';
import { IcoPipe } from '../CO/Indice/ico.pipe';
import { Ipm10Pipe } from '../PM10/Indice/ipm10.pipe'
import { Ipm25Pipe } from '../pm25/Indice/ipm25.pipe';
import { Iso2Pipe } from '../SO2/Indice/iso2.pipe';
import { Io3Pipe } from '../O3/Indice/io3.pipe';


@NgModule({
  declarations: [Ipm10Pipe,Ipm25Pipe,Iso2Pipe,Io3Pipe,IcoPipe,Ino2Pipe],
  imports: [
    CommonModule
  ],
  exports:[Ipm10Pipe,Ipm25Pipe,Iso2Pipe,Io3Pipe,IcoPipe,Ino2Pipe]
})
export class IndicesPipeModule { }

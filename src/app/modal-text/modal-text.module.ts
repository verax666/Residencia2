import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalTextPageRoutingModule } from './modal-text-routing.module';

import { ModalTextPage } from './modal-text.page';
import { InfoPollutantsComponent } from './info-pollutants/info-pollutants.component';
import { InfoIndiceComponent } from './info-indice/info-indice.component';
import {ObtInfoIndicesService } from '../Servicios/obt-infoIndices/obt-info-indices.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalTextPageRoutingModule
  ],
  declarations: [ModalTextPage,InfoPollutantsComponent,InfoIndiceComponent],
  providers:[ObtInfoIndicesService]
})
export class ModalTextPageModule {}

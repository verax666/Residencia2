import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalInfoPageRoutingModule } from './modal-info-routing.module';

import { ModalInfoPage } from './modal-info.page';
import { ModalTextPage } from '../modal-text/modal-text.page';
// Componentes Color
import { SharedModule } from '../Shared/shared.module';
import { PollutantsComponent } from './pollutants/pollutants.component';
import { IndiceComponent } from './pollutants/indice/indice.component';
import { HistoryComponent } from './pollutants/history/history.component';
import { SegmentosComponent } from './segmentos/segmentos.component';
import { IndicesPipeModule } from '../Pipes/indices-pipe/indices-pipe.module';
import { GraphicPipeModule } from '../Pipes/graphic-pipe/graphic-pipe.module';
import { TipsComponent } from './Tips/tips.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalInfoPageRoutingModule,
    SharedModule,
    IndicesPipeModule,
    GraphicPipeModule
    
  ],
  declarations: [ModalInfoPage,PollutantsComponent,IndiceComponent,HistoryComponent,SegmentosComponent,TipsComponent,ModalTextPage],
  providers:[]
})
export class ModalInfoPageModule {}

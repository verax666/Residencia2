import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP } from '@ionic-native/http/ngx';

import { IonicModule } from '@ionic/angular';

import { SitiosPageRoutingModule } from './sitios-routing.module';

import { SitiosPage } from './sitios.page';
import { HeaderComponent } from '../header/header.component';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { ModalTextPage } from '../modal-text/modal-text.page'
import { ModalInfoPageModule } from '../modal-info/modal-info.module';
import { SitioComponent } from '../sitio/sitio.component';
import { SharedModule } from '../Shared/shared.module' 
import { CityPipe } from '../Pipes/Hora/city.pipe'
import { UsaqiPipe} from '../Pipes/US AQI/usaqi.pipe';

@NgModule({
  entryComponents:[
    ModalInfoPage,
    ModalTextPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitiosPageRoutingModule,
    ModalInfoPageModule,
    SharedModule
  ],
  declarations: [SitiosPage,HeaderComponent,SitioComponent,CityPipe],
  providers:[HTTP,UsaqiPipe]
})
export class SitiosPageModule {}

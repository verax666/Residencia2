import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidesPageRoutingModule } from './slides-routing.module';

import { SlidesPage } from './slides.page';
import { ObtPaisesService } from '../Servicios/obt-paises/obt-paises.service';
import { ObtEstadosService } from '../Servicios/obt-estados/obt-estados.service';
import { ObtMunicipiosService } from '../Servicios/obt-municipios/obt-municipios.service';
import { SitioComponent } from '../sitio/sitio.component';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidesPageRoutingModule,
    SharedModule
  ],
  declarations: [SlidesPage,SitioComponent],
  providers: [ObtPaisesService, ObtEstadosService, ObtMunicipiosService]
})
export class SlidesPageModule {}

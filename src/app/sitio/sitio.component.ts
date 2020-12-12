import {  Component, Input, OnInit,  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-sitio',
  templateUrl: './sitio.component.html',
  styleUrls: ['./sitio.component.scss'],
})


export class SitioComponent implements OnInit {
  @Input("Humedad") Humedad:string;
  @Input("Viento") Viento:string;
  @Input("Temp") Temp:string;
  @Input("Values-P") Values:any;
  @Input("AQI") AQI:any;

  constructor(private modalCtrl: ModalController) { }
  
  ngOnInit() {  
  }
 

  async abrirModal(Values:[],T,H,Viento,AQI){
    const modal = await this.modalCtrl.create({
      component:ModalInfoPage,
      componentProps:{
      Values:Values,
      Viento:Viento,
      H:H,
      T:T,
      AQI:AQI
    }
    });
    await modal.present();
      }
}

import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalTextPage } from 'src/app/modal-text/modal-text.page';

@Component({
  selector: 'indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.scss'],
})
export class IndiceComponent implements OnInit {

@Input("AQI") AQI:any; 
@Input("Class-c") Class:string;
@Input("Face-c") Face:string;
@Input("Calidad-c") Calidad:string;
@Input("Humedad") Humedad:string;
@Input("Viento") Viento:string;
@Input("Temp") Temp:string;
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
   
  }
  async abrirModal(p){
    const modal = await this.modalCtrl.create({
      component:ModalTextPage,
      componentProps:{
      Segment:p,
      Title:"AQI Indice de calidad del Aire"
    }
    });
    await modal.present();
      }


}

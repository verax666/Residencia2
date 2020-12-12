import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalTextPage } from '../modal-text/modal-text.page';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

@Input() Values:[];
@Input() T;
@Input() H;
@Input() Viento;
@Input() AQI;
 
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  salirsinArgumentos(){
    this.modalCtrl.dismiss();
  }
 

}

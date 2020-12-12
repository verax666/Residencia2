import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-text',
  templateUrl: './modal-text.page.html',
  styleUrls: ['./modal-text.page.scss'],
})
export class ModalTextPage implements OnInit {

@Input() Segment;
@Input() Title;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  salirsinArgumentos(){
    this.modalCtrl.dismiss();
  }
}

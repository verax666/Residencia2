import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalTextPage } from 'src/app/modal-text/modal-text.page';

@Component({
  selector: 'pollutants',
  templateUrl: './pollutants.component.html',
  styleUrls: ['./pollutants.component.scss'],
})
export class PollutantsComponent implements OnInit {
@Input("Values") Values:any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  
  
      }
      async abrirModal(p,t){
        let title;
        switch (true) {
          case t ==1:
            title ="P.M. 10"
            break;
          case t==2:
             title ="P.M. 2.5"
            break;
            case t==3:
              title = "O3"
              break;
              case t==4:
              title = "NO2"
              break;
              case t==5:
              title = "SO2"
              break;
              case t==6:
              title = "CO"
              break;
          default:
            break;
        }
        const modal = await this.modalCtrl.create({
          component:ModalTextPage,
          componentProps:{
            Segment:p,
            Title:title
        }
        });
        await modal.present();
          }
}

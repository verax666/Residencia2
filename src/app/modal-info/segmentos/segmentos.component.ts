import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-segmentos',
  templateUrl: './segmentos.component.html',
  styleUrls: ['./segmentos.component.scss'],
})
export class SegmentosComponent implements OnInit {
  segmento:string;
  @Input("city") city:string;
  
  constructor() { }

  ngOnInit() {  
    this.segmento = "P.M. 10";
   
}
segmentChanged(ev: any) {

}


}

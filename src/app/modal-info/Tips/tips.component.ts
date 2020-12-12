import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss'],
})
export class TipsComponent implements OnInit {
@Input("AQI") AQI:any;

  constructor() { }

  ngOnInit() {}

}

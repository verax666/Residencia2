import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'indice-p',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.scss'],
})
export class IndiceComponent implements OnInit {
@Input("Color") Color:string;
@Input("Pollutants") Pollutants:string;
@Input("Valor") Valor:string;
  constructor() { }

  ngOnInit() {}

}

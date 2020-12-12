import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { ObtInfoIndicesService} from '../../Servicios/obt-infoIndices/obt-info-indices.service'

@Component({
  selector: 'app-info-indice',
  templateUrl: './info-indice.component.html',
  styleUrls: ['./info-indice.component.scss'],
})
export class InfoIndiceComponent implements OnInit {
  private onDestroy$ = new Subject<void>(); 
Info =[];

  constructor(private obtinfo: ObtInfoIndicesService) { }

  ngOnInit() {
    this.obtinfo.obtf().pipe(takeUntil(this.onDestroy$),finalize(()=>{ 
    })).subscribe(data =>{ this.Info = data; })
   
  }

  ngOnDestroy(): void {
   this.onDestroy$.next();
   this.onDestroy$.complete();
  }
}

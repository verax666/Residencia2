import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndiceComponent } from './indice-valores/Indice/indice.component';



@NgModule({
  declarations: [IndiceComponent],
  imports: [CommonModule],
  exports:[IndiceComponent]
})
export class SharedModule { }

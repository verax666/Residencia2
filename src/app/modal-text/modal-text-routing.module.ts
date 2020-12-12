import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalTextPage } from './modal-text.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalTextPageRoutingModule {}

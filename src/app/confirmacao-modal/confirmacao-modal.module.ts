import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmacaoModalComponent } from './confirmacao-modal.component';
import { ConfirmacaoModalRoutingModule } from './confirmacao-modal-routing.module';


@NgModule({
  declarations: [
    ConfirmacaoModalComponent
  ],
  imports: [
    CommonModule,
    ConfirmacaoModalRoutingModule
  ],
  exports: [
    ConfirmacaoModalComponent
  ]
})
export class ConfirmacaoModalModule { }

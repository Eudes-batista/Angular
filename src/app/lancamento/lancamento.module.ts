import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaLancamentoComponent } from './lista-lancamento/lista-lancamento.component';
import { LancamentoComponent } from './inclusao-lancamento/lancamento.component';


@NgModule({
    declarations: [
        LancamentoComponent,
        ListaLancamentoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [],
    providers: [],
})
export class LancamentoModule { }
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaLancamentoComponent } from './lista-lancamento/lista-lancamento.component';

const routing: Routes = [
    { path: '', component: ListaLancamentoComponent },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routing)
    ],
    exports: [RouterModule],
    providers: [],
})
export class LancamentoRoutingModule { }
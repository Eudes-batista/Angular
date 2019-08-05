import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentoRoutingModule } from './lancamento.routing.module';
import { ListaLancamentoComponent } from './lista-lancamento/lista-lancamento.component';
import { LancamentoComponent } from './inclusao-lancamento/lancamento.component';
import { ProdutoService } from './../cadastros/produtos/produto.service';


@NgModule({
    declarations: [
        LancamentoComponent,
        ListaLancamentoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        LancamentoRoutingModule
    ],
    exports: [],
    providers: [ProdutoService]
})
export class LancamentoModule { }

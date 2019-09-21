import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBootstrapModule } from './../../modulo-bootstrap/app-bootstrap.module';
import { ProdutoRoutingModule } from './produto.routing.module';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { FormDebugComponent } from './../../form-debug/form-debug.component';
import { ValidacoesModule } from './../../validacoes/valicaoes.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
    declarations: [
        ProdutoCadastroComponent,
        ProdutoListaComponent,
        FormDebugComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProdutoRoutingModule,
        ValidacoesModule,
        CurrencyMaskModule,
        AppBootstrapModule
    ],
    exports: [],
    providers: [],
})
export class ProdutoModule { }

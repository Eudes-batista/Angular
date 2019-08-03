import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProdutoCadastroComponent } from './produtos/produto-cadastro/produto-cadastro.component';
import { ProdutoListaComponent } from './produtos/produto-lista/produto-lista.component';
import { RoutingCadastroModule } from './routing-cadastro.module';

@NgModule({
    declarations: [
        ProdutoCadastroComponent,
        ProdutoListaComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        RoutingCadastroModule
    ],
    exports: [],
    providers: [],
})
export class CadastroModule { }
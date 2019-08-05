import { AppBootstrapModule } from './../../modulo-bootstrap/app-bootstrap.module';
import { ProdutoService } from './produto.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto.routing.module';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';

@NgModule({
    declarations: [
        ProdutoCadastroComponent,
        ProdutoListaComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProdutoRoutingModule,
        AppBootstrapModule
    ],
    exports: [],
    providers: [ProdutoService],
})
export class ProdutoModule { }
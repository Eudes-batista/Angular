import { ProdutoGuardResolve } from './../../guarda-rota/produto.guard.resolve';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';

const routing: Routes = [
    { path: '', component: ProdutoListaComponent }
    , { path: 'novo', component: ProdutoCadastroComponent }
    , { path: ':id/editar', component: ProdutoCadastroComponent , resolve: {produto: ProdutoGuardResolve} }
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
export class ProdutoRoutingModule { }
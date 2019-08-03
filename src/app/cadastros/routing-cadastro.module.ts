import { ProdutoListaComponent } from './produtos/produto-lista/produto-lista.component';
import { ProdutoCadastroComponent } from './produtos/produto-cadastro/produto-cadastro.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const router: Routes = [
  { path: 'produto/novo', component: ProdutoCadastroComponent }
, { path: 'produto/lista', component: ProdutoListaComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class RoutingCadastroModule { }

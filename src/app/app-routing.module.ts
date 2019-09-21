import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { ClienteComponent } from './cliente/cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PrincipalComponent } from './principal/principal.component';
import { AuthGrupoGuardCanLoad } from './guarda-rota/auth.grupo.canload.guard';
import { AuthGuard } from './guarda-rota/auth.guard';


const routes: Routes = [
  {
    path: 'principal', component: PrincipalComponent, canActivate: [AuthGuard]
  },
  {
    path: 'produto', loadChildren: () => import('./cadastros/produtos/produto.module').then(mod => mod.ProdutoModule)
    , canActivate: [AuthGuard]
  },
  {
    path: 'grupo', loadChildren: () => import('./cadastros/grupo/grupo.module').then(mod => mod.GrupoModule)
    , canActivate: [AuthGuard], canLoad: [AuthGrupoGuardCanLoad]
  },
  {
    path: 'lancamentos', loadChildren: () => import('./lancamento/lancamento.module').then(mod => mod.LancamentoModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pais', loadChildren: () => import('./cadastros/pais/pais.module').then(mod => mod.PaisModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'estado', loadChildren: () => import('./cadastros/estado/estado.module').then(mod => mod.EstadoModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cidade', loadChildren: () => import('./cadastros/cidade/cidade.module').then(mod => mod.CidadeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'cliente', component: ClienteComponent
  },
  {
    path: 'fornecedor', component: FornecedorComponent
  },
  {
    path: '', redirectTo: '/cliente', pathMatch: 'full'
  },
  {
    path: '**', component: PaginaNaoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

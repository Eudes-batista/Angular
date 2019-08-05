import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { AuthGuard } from './guarda-rota/auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'principal', component: PrincipalComponent, canActivate: [AuthGuard]
  },
  {
    path: 'produto', loadChildren: () => import('./cadastros/produtos/produto.module').then(mod => mod.ProdutoModule)
    , canActivate: [AuthGuard]
  },
  {
    path: 'grupo', loadChildren: () => import('./cadastros/grupo/grupo.module').then(mod => mod.GrupoModule)
    , canActivate: [AuthGuard]
  },
  {
    path: 'lancamentos', loadChildren: () => import('./lancamento/lancamento.module').then(mod => mod.LancamentoModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

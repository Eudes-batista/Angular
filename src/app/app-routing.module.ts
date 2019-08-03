import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LancamentoComponent } from './lancamento/inclusao-lancamento/lancamento.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
  { path: 'lancamentos', component: LancamentoComponent },
  { path: '', component: PrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

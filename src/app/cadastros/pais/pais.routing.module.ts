import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PaisCadastroComponent } from './pais-cadastro/pais-cadastro.component';
import { PaisComponent } from './pais.component';
import { PaisGuardResolve } from './pais.guard.resolve';

const routes: Routes = [
      { path: '', component: PaisComponent }
    , { path: 'novo', component: PaisCadastroComponent }
    , { path: ':id/editar', component: PaisCadastroComponent, resolve: {pais: PaisGuardResolve} }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaisRoutingModule { }

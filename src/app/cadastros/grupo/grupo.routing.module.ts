import { GrupoGuardResolve } from './../../guarda-rota/grupo.guard.resolve';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGrupoGuard } from './../../guarda-rota/auth.grupo.guard';
import { AuthChildGuard } from './../../guarda-rota/authchild.guard';
import { GrupoDetalheComponent } from './grupo-detalhe/grupo-detalhe.component';
import { GrupoComponent } from './grupo.component';

const routing: Routes = [
    {
        path: '', component: GrupoComponent, canActivateChild: [AuthChildGuard],
        children: [
            {
                path: ':id/detalhe', component: GrupoDetalheComponent
                , canDeactivate: [AuthGrupoGuard], resolve: { grupo: GrupoGuardResolve }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routing)],
    exports: [RouterModule],
})
export class GrupoRoutingModule { }

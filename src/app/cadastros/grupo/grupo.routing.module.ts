import { GrupoDetalheComponent } from './grupo-detalhe/grupo-detalhe.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { GrupoComponent } from './grupo.component';

const routing: Routes = [
    {
        path: '', component: GrupoComponent, children: [
            { path: ':id/detalhe', component: GrupoDetalheComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routing)],
    exports: [RouterModule],
})
export class GrupoRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppBootstrapModule } from './../../modulo-bootstrap/app-bootstrap.module';

import { GrupoRoutingModule } from './grupo.routing.module';
import { GrupoDetalheComponent } from './grupo-detalhe/grupo-detalhe.component';
import { GrupoService } from './grupo.service';
import { GrupoComponent } from './grupo.component';

@NgModule({
    declarations: [
        GrupoComponent,
        GrupoDetalheComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppBootstrapModule,
        GrupoRoutingModule
    ],
    exports: [],
    providers: [GrupoService],
})
export class GrupoModule { }
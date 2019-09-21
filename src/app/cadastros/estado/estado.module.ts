import { ValidacoesModule } from './../../validacoes/valicaoes.module';
import { AppBootstrapModule } from './../../modulo-bootstrap/app-bootstrap.module';
import { HttpClientModule } from '@angular/common/http';
import { EstadoRoutingModule } from './estado-routing.module';
import { EstadoService } from './estado.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadoComponent } from './estado.component';
import { EstadoCadastroComponent } from './estado-cadastro/estado-cadastro.component';

@NgModule({
    declarations: [
        EstadoComponent,
        EstadoCadastroComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        AppBootstrapModule,
        ValidacoesModule,
        EstadoRoutingModule,
    ],
    exports: [],
    providers: [],
})
export class EstadoModule { }

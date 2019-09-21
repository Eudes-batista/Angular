import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ConfirmacaoModalModule } from './../../confirmacao-modal/confirmacao-modal.module';
import { PaisGuardResolve } from './pais.guard.resolve';
import { ValidacoesModule } from './../../validacoes/valicaoes.module';
import { PaisRoutingModule } from './pais.routing.module';
import { PaisComponent } from './pais.component';
import { AppBootstrapModule } from './../../modulo-bootstrap/app-bootstrap.module';
import { PaisCadastroComponent } from './pais-cadastro/pais-cadastro.component';



@NgModule({
  declarations: [
    PaisComponent,
    PaisCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppBootstrapModule,
    HttpClientModule,
    ValidacoesModule,
    ConfirmacaoModalModule,
    PaisRoutingModule
  ],
  providers: [
    PaisGuardResolve
  ]
})
export class PaisModule { }

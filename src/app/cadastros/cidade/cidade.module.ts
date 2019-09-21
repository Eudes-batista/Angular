import { FormsModule } from '@angular/forms';
import { ValidacoesModule } from './../../validacoes/valicaoes.module';
import { AppBootstrapModule } from './../../modulo-bootstrap/app-bootstrap.module';
import { CidadeService } from './cidade.service';
import { CidadeRoutingModule } from './cidade.routing.module';
import { CidadeComponent } from './cidade.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CidadeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppBootstrapModule,
    ValidacoesModule,
    CidadeRoutingModule
  ],
  providers: [CidadeService]
})
export class CidadeModule { }

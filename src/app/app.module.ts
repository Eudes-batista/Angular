import { AlertaComponent } from './alerta/alerta.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { ConfirmacaoModalModule } from './confirmacao-modal/confirmacao-modal.module';
import { PrincipalModule } from './principal/principal.module';
import { PaginaNaoEncontradaModule } from './pagina-nao-encontrada/pagina-nao-encontrada.module';
import { LoginModule } from './login/login.module';
import { AppBootstrapModule } from './modulo-bootstrap/app-bootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContatoComponent } from './contato/contato.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AlertaComponent,
    ContatoComponent,
    ClienteComponent,
    FornecedorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    AppBootstrapModule,
    PaginaNaoEncontradaModule,
    PrincipalModule,
    HttpClientModule,
    ConfirmacaoModalModule,
    HttpClientJsonpModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [AlertaComponent],
  bootstrap: [AppComponent],
  entryComponents: [AlertaComponent]
})
export class AppModule { }

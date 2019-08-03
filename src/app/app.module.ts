import { CadastroModule } from './cadastros/cadastro.module';
import { RoutingCadastroModule } from './cadastros/routing-cadastro.module';
import { AppBootstrapModule } from './modulo-bootstrap/app-bootstrap.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './lancamento/produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    ListaProdutoComponent,
    MenuComponent,
    PrincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CadastroModule,
    FormsModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

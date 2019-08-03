import { PrincipalComponent } from './principal/principal.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '' , component: PrincipalComponent},
  {path: 'produtos' , component: ListaProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

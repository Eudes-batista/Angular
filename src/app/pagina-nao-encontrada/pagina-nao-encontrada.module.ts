import { RouterModule } from '@angular/router';
import { LoginComponent } from './../login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        PaginaNaoEncontradaComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot([])
    ],
    exports: [],
    providers: [],
})
export class PaginaNaoEncontradaModule { }

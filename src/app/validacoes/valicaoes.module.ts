import { AppBootstrapModule } from './../modulo-bootstrap/app-bootstrap.module';
import { AlertaCampoErroComponent } from './alerta-campo-erro/alerta-campo-erro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AlertaCampoErroComponent
    ],
    imports: [
        CommonModule,
        AppBootstrapModule
    ],
    exports: [AlertaCampoErroComponent],
    providers: [],
})
export class ValidacoesModule { }

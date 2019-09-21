import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalComponent } from './principal.component';

@NgModule({
    declarations: [
        PrincipalComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [],
    providers: [],
})
export class PrincipalModule { }

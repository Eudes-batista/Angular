import { GrupoService } from './../cadastros/grupo/grupo.service';
import { Grupo } from './../cadastros/grupo/grupo.class';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GrupoGuardResolve implements Resolve<Grupo> {
    constructor(private grupoServce: GrupoService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const id = route.params.id;
        return this.grupoServce.buscarGrupo(id);
    }
}

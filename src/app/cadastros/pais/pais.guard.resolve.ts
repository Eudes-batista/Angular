import { PaisService } from './pais.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Pais } from './pais.class';

@Injectable()
export class PaisGuardResolve implements Resolve<Pais> {

    constructor(private paisService: PaisService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const codigo = route.params.id;
        return this.paisService.buscarPais(codigo);
    }
}

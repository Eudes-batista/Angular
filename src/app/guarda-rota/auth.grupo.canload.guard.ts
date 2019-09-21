import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGrupoGuardCanLoad implements CanLoad {
    constructor(private authService: AuthService, private router: Router) { }

    canLoad(route: Route) {
        if (this.authService.getUsuarioAutenticado()) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}

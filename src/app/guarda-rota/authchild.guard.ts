import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthChildGuard implements CanActivateChild {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivateChild(
        route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | Observable<boolean> {
        console.log(route);
        console.log(state);
        if (state.url.includes('detalhe')) {
          //  alert('Não tem acesso a esses detalhes');
         //   return false;
        }
        return true;
    }

}

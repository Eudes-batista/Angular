import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean> {
    if (localStorage.getItem('usuario')) {
      return true;
    }
    this.authService.getEventEmitter().emit(false);
    this.router.navigate(['/login']);
    return false;
  }

}

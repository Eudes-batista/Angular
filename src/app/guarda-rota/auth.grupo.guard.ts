import { GuardeGeneric } from './guard.generic';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGrupoGuard implements CanDeactivate<GuardeGeneric>{

  canDeactivate(
      guardGeneric: GuardeGeneric
    , route: ActivatedRouteSnapshot
    , state: RouterStateSnapshot): boolean | Observable<boolean> {
    return guardGeneric.isPodeSair();
  }

}

import { Usuario } from './usuario.class';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false;
  private eventEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  public fazerLogin(usuario: Usuario): void {
    this.usuarioAutenticado = usuario.nome === 'eudes' && usuario.senha === '123';
    if (this.usuarioAutenticado) {
      console.log(this.getUsuarioAutenticado());
      this.eventEmitter.emit(true);
      localStorage.setItem('usuario', 'usuario');
      this.router.navigate(['/principal']);
      return;
    }
    this.eventEmitter.emit(false);
  }

  public getUsuarioAutenticado(): boolean {
    return !!localStorage.getItem('usuario');
  }

  public getEventEmitter(): EventEmitter<boolean> {
    return this.eventEmitter;
  }

}

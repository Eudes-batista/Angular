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
    this.eventEmitter.emit(this.usuarioAutenticado);
    if (this.verificarUsuarioLogado()) {
      this.router.navigate(['/principal']);
    }
  }

  private verificarUsuarioLogado(): boolean {
    return this.usuarioAutenticado;
  }

  public getUsuarioAutenticado(): boolean {
    return this.usuarioAutenticado;
  }

  public getEventEmitter(): EventEmitter<boolean> {
    return this.eventEmitter;
  }

}

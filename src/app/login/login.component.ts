import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuario.class';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(private authService: AuthService) { }

  public fazerLogin(): void {
    this.authService.fazerLogin(this.usuario);
  }

  ngOnInit() {
    this.usuario = new Usuario();
  }

}

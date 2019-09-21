import { Subscription } from 'rxjs';
import { AuthService } from './login/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private inscricao: Subscription;
  mostrarMenu: boolean;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.inscricao = this.authService
      .getEventEmitter()
      .subscribe(auth => {
        this.mostrarMenu = auth;
      });
    const usuario = localStorage.getItem('usuario');
    if (!this.mostrarMenu && usuario) {
      this.mostrarMenu = true;
    }
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}

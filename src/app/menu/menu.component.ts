import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fazerLogout() {
    localStorage.removeItem('usuario');
    window.location.href = 'http://localhost:4200';
  }

}

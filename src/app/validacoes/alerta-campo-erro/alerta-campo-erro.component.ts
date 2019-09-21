import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-alerta-campo-erro',
  templateUrl: './alerta-campo-erro.component.html',
  styleUrls: ['./alerta-campo-erro.component.css']
})
export class AlertaCampoErroComponent implements OnInit {

  @Input() campo: FormControl;

  constructor() { }

  ngOnInit() {
  }

  verificarCampoInvalido() {
    return this.campo.invalid && (this.campo.dirty || this.campo.touched);
  }

}

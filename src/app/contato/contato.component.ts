import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit, OnDestroy {

  @Input() pessoa: any;
  nome: string;

  constructor() { }

  public salvar(): void {
    console.log(this.pessoa);
    console.log(this.nome);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log(this.pessoa);
    console.log(this.nome);
  }

}

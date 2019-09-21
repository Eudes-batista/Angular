import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente = '';
  informacaoDaConsulta: any;
  url = 'https://www.receitaws.com.br/v1/cnpj/';
  httpOptions = {};


  constructor(private httpClient: HttpClient) {

  }

  public listarInformacoesDaPessoa(): void {
    this.httpClient.jsonp(`${this.url}${this.cliente}`, 'callback')
      .pipe(take(1))
      .subscribe(
        success => {
          this.informacaoDaConsulta = success;
        },
        error => {
          console.log(error);
        }
      );
  }


  ngOnInit() {
  }
}

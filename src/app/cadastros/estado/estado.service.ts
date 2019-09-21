import { Pais } from './../pais/pais.class';
import { PaisService } from './../pais/pais.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, catchError } from 'rxjs/operators';


import { Estado } from './estado.class';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private url = 'http://localhost:8090/estado';

  constructor(private httpClient: HttpClient) { }

  public listarEstado() {
    return this.httpClient.get(this.url).pipe(take(1));
  }

  public pesquisarEstado(nome: string) {
    return this.httpClient.get(`${this.url}/nome/${nome}`).pipe(take(1));
  }

  public salvar(estado: Estado) {
    return this.httpClient.post(this.url, estado).pipe(take(1));
  }

}

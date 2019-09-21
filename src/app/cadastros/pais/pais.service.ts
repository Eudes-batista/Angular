import { Pais } from './pais.class';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url = 'http://localhost:8090/pais';

  constructor(private httpClient: HttpClient) { }

  public listarPaises(pagina: number = 0) {
    return this.httpClient.get(`${this.url}/?page=${pagina}&size=10`).pipe(take(1));
  }

  public pesquisarPais(nome: string) {
    return this.httpClient.get(`${this.url}/nome/${nome}/?size=10`).pipe(take(1));
  }

  public salvar(pais: Pais): Observable<Pais> {
    return this.httpClient.post<Pais>(this.url, pais).pipe(take(1));
  }

  public buscarPais(codigo: number): Observable<Pais> {
    return this.httpClient.get<Pais>(`${this.url}/${codigo}`).pipe(take(1));
  }

}

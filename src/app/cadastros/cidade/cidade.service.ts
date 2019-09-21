import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable()
export class CidadeService {

    private url = 'http://localhost:8090/cidade';

    constructor(private httpClient: HttpClient) {

    }

    public listarCidade(numeroDePagina: number) {
        return this.httpClient.get(`${this.url}/?page=${numeroDePagina}&size=10`).pipe(take(1));
    }

}


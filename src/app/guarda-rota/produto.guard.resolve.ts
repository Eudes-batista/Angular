import { ProdutoService } from './../cadastros/produtos/produto.service';
import { Produto } from './../cadastros/produtos/produto.class';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProdutoGuardResolve implements Resolve<Produto> {

    constructor(private produtoService: ProdutoService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const parametro = route.params.id;
        const produto: Produto = this.produtoService.buscarProdutoPorReferencia(parametro);        
        return produto;
    }
}

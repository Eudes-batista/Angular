import { Injectable } from '@angular/core';

import { Produto } from './produto.class';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: Produto[] = [
    { referencia: '1', nome: 'Galeto', preco: 38.00, quantidade: 1 },
    { referencia: '2', nome: 'Pizza Calabreza', preco: 25.00, quantidade: 1 },
    { referencia: '3', nome: 'Pizza Frango', preco: 22.50, quantidade: 1 },
  ];

  public getProdutos(): Produto[] {
    return this.produtos;
  }

  public buscarProdutoPorReferencia(referencia: string): Produto {
    return this.produtos.filter(produto => produto.referencia === referencia)[0];
  }

  public salvarProduto(produto: Produto): void {
    const produtoEncontrado: Produto = this.buscarProdutoPorReferencia(produto.referencia);
    if (!produtoEncontrado) {
        this.produtos.push(produto);
        return;
    }
    this.excluirProduto(produtoEncontrado);
    this.produtos.push(produto);
  }

  public excluirProduto(produto: Produto) {
    const index = this.produtos.indexOf(produto);
    this.produtos.splice(index, 1);
  }

  constructor() { }
}

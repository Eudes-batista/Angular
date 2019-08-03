import { Component, OnInit } from '@angular/core';

import { Produto } from 'src/app/cadastros/produtos/produto.class';

@Component({
  selector: 'app-lista-lancamento',
  templateUrl: './lista-lancamento.component.html',
  styleUrls: ['./lista-lancamento.component.css']
})
export class ListaLancamentoComponent implements OnInit {

  produtos: Produto[] = new Array<Produto>();
  totalQuantidade = 0.0;
  totalValorItens = 0.0;

  constructor() { }

  public adicionar(evt): void {
    this.produtos.push(evt);
    this.calcularTotais();
  }

  private calcularTotais(): void {
    this.somarQuantidadeItens();
    this.somarValorItens();
  }

  private somarQuantidadeItens(): void {
    this.totalQuantidade = this.produtos.map(produto => produto.quantidade).reduce((x, y) => x + y, 0);
  }

  private somarValorItens(): void {
    this.totalValorItens = this.produtos.map(produto => produto.preco).reduce((x, y) => x + y, 0);
  }

  public excluirItem(produto: Produto): void {
    const index = this.produtos.indexOf(produto);
    this.produtos.splice(index, 1);
    this.calcularTotais();
  }

  ngOnInit() {

  }

}

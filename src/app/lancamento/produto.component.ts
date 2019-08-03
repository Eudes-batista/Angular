import { ProdutoService } from '../cadastros/produtos/produto.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Produto } from '../cadastros/produtos/produto.class';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  preserveWhitespaces: true
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[];

  @Output() adicionouProduto = new EventEmitter();

  constructor(private produtoService: ProdutoService) { }

  public adicionarQuantidade(produto: Produto): void {
    produto.quantidade++;
  }

  public removerQuantidade(produto: Produto): void {
    produto.quantidade--;
  }

  public confirmaProduto(produto: Produto): void {
    this.adicionouProduto.emit(Object.assign({}, produto));
    produto.quantidade = 1;
  }

  ngOnInit() {
    this.produtos = this.produtoService.getProdutos();
  }

}

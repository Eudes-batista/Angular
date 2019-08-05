import { Component, OnInit, TemplateRef } from '@angular/core';

import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.class';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css'],
  preserveWhitespaces: true
})
export class ProdutoListaComponent implements OnInit {

  produtos: Produto[];
  modalRef: BsModalRef;
  produto: Produto;

  constructor(private produtoService: ProdutoService, private modalService: BsModalService) { }

  public listarProdutos(): void {
    this.produtos = this.produtoService.getProdutos();
  }

  public excluirEfecharModal(): void {
    this.produtoService.excluirProduto(this.produto);
    this.cancelarRefenciaProduto();
    this.fecharModal();
  }

  private setProduto(produto: Produto): void {
    this.produto = produto;
  }

  public abrirModal(template: TemplateRef<any>, produto: Produto) {
    this.modalRef = this.modalService.show(template);
    this.setProduto(produto);
  }

  public fecharModal(): void {
    this.modalRef.hide();
    this.cancelarRefenciaProduto();
  }
  private cancelarRefenciaProduto(): void {
    this.produto = null;
  }

  ngOnInit() {
    this.listarProdutos();
  }

}

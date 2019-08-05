import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { Produto } from 'src/app/cadastros/produtos/produto.class';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit, OnDestroy {

  id: string;
  private subsCription: Subscription;
  produto: Produto;
  camposInvalidos = false;

  @ViewChild('frm', { static: false }) formulario: NgForm;

  constructor(private produtoService: ProdutoService, private activedRouter: ActivatedRoute) { }

  buscarProduto() {
    this.subsCription = this.activedRouter.params.subscribe(param => this.id = param.id);
    if (!this.id) { return; }
    this.produto = this.produtoService.buscarProdutoPorReferencia(this.id);
  }

  public salvar(produto): void {
    this.camposInvalidos = this.validarCampos();
    if (this.camposInvalidos) { return; }
    console.log(produto);
  }

  public validarCampos(): boolean {
    return this.formulario.controls.nome.invalid && this.formulario.controls.referencia.invalid;
  }

  ngOnInit() {
    this.buscarProduto();
  }

  ngOnDestroy() {
    this.subsCription.unsubscribe();
  }

}

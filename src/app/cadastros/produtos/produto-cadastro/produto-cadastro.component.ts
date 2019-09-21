import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private produtoService: ProdutoService,
    private activedRouter: ActivatedRoute,
    private router: Router) { }

  buscarProduto() {
    this.subsCription = this.activedRouter.data
      .subscribe((param: { produto: Produto }) => {
        this.produto = param.produto;
      });
  }

  public salvar(produto): void {
    this.camposInvalidos = this.validarCampos();
    if (this.camposInvalidos) { return; }
    this.produtoService.salvarProduto(produto);
    this.router.navigate(['/produto']);
  }

  passarFocoNome() {
    document.getElementById('nome').focus();
  }

  public validarCampos(): boolean {
    return this.formulario.controls.nome.invalid && this.formulario.controls.referencia.invalid;
  }

  ngOnInit() {
    this.buscarProduto();
    if (!this.produto) {
      this.produto = new Produto();
    }
  }

  ngOnDestroy() {
    this.subsCription.unsubscribe();
  }

}

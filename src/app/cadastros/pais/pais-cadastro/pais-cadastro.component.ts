import { AlertaService } from './../../../alerta/alerta.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { PaisService } from './../pais.service';
import { Pais } from './../pais.class';

@Component({
  selector: 'app-pais-cadastro',
  templateUrl: './pais-cadastro.component.html',
  styleUrls: ['./pais-cadastro.component.css'],
  preserveWhitespaces: true
})
export class PaisCadastroComponent implements OnInit, OnDestroy {

  pais: Pais;
  @ViewChild('frm', { static: false }) formulario: NgForm;
  private inscricao: Subscription;

  constructor(private paisService: PaisService, private activatedRoute: ActivatedRoute, private alertaService: AlertaService) { }

  public salvar(pais: Pais): void {
    this.paisService.salvar(pais).subscribe(response => {
      console.log(`${response} novo registro salvo.`);
      this.formulario.reset();
    },
      error => {
        console.log(error);
        this.alertaService.abrirAlerta('danger', `Erro ao cadastra`);
      }
    );
  }

  public valorInformadoMaiorQueQuatroDigito(): boolean {
    const tamanhoMaximoDoCampo = 4;
    const valorDoCampo: string = String(this.pais.codigo);
    return valorDoCampo.length > tamanhoMaximoDoCampo;
  }

  public buscarPais(): Pais {
    let pais: Pais = null;
    this.inscricao = this.activatedRoute.data.subscribe(
      (param: { pais: Pais }) => {
        pais = param.pais;
      }
    );
    return pais;
  }

  ngOnInit() {
    this.pais = this.buscarPais();
    if (!this.pais) {
      this.pais = new Pais();
    }
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}

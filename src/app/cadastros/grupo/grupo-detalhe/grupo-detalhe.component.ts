import { GuardeGeneric } from './../../../guarda-rota/guard.generic';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Grupo } from './../grupo.class';
import { GrupoService } from './../grupo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grupo-detalhe',
  templateUrl: './grupo-detalhe.component.html',
  styleUrls: ['./grupo-detalhe.component.css']
})
export class GrupoDetalheComponent implements OnInit, OnDestroy, GuardeGeneric {

  grupo: Grupo;
  private inscricao: Subscription;
  private id: string;

  constructor(private grupoService: GrupoService, private route: ActivatedRoute) { }

  private buscarGrupo(): void {
    this.inscricao = this.route.data
      .subscribe((param: { grupo: Grupo }) => {
        this.grupo = param.grupo;
      });
  }

  ngOnInit(): void {
    this.buscarGrupo();
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  isPodeSair(): boolean {
    return confirm('Deseja mesmo sair da tela');
  }

}

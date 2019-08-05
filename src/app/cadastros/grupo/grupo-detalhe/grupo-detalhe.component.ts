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
export class GrupoDetalheComponent implements OnInit, OnDestroy {

  grupo: Grupo;
  private inscricao: Subscription;
  private id: string;

  constructor(private grupoService: GrupoService, private route: ActivatedRoute) { }

  private buscarGrupo(): void {
    this.inscricao = this.route.params.subscribe(param => {
      this.id = param.id;
      if (this.validarId()) {
        this.grupo = this.grupoService.buscarGrupo(this.id);
      }
    });
  }

  private validarId(): boolean {
    return !!this.id;
  }

  ngOnInit(): void {
    this.buscarGrupo();
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}

import { AlertaService } from './../../alerta/alerta.service';
import { Component, OnInit, TemplateRef } from '@angular/core';

import { Pais } from './pais.class';
import { PaisService } from './pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
  preserveWhitespaces: true
})
export class PaisComponent implements OnInit {

  pais: Pais;
  paises: Pais[];
  pesquisa: string;
  totalDePaginas: number;

  constructor(private paisService: PaisService, private alertaService: AlertaService) { }

  public listarPais(pagina): void {
    this.paisService.listarPaises(pagina)
      .subscribe(response => {
        this.paises = response['content'];
        this.totalDePaginas = response['totalElements'];
      },
        error => {
          this.alertaService.abrirAlerta('danger', `Erro ao cadastra`);
        }
      );
  }

  public setPagina(evento: any): void {
    this.listarPais(evento.page - 1);
  }

  public pesquisarPorNome(): void {
    if (!this.pesquisa) {
      this.listarPais(0);
      return;
    }
    this.paisService.pesquisarPais(this.pesquisa).subscribe(
      success => {
        this.paises = success['content'];
        this.totalDePaginas = success['totalElements'];
      }
    );
  }

  ngOnInit() {
    this.listarPais(0);
  }

}

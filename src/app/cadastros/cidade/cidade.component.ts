import { CidadeService } from './cidade.service';
import { Cidade } from './cidade.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  cidades: Cidade[];
  totalDePagina: number;
  pesquisa: string;

  constructor(private cidadeService: CidadeService) { }

  public listarCidades(): void {
    this.cidadeService.listarCidade(0).subscribe(
      success => {
        this.totalDePagina = success['totalElements'];
        this.cidades = success['content'];
      }
    );
  }

  public pesquisarPorNome(): void {

  }

  ngOnInit() {
    this.listarCidades();
  }

}

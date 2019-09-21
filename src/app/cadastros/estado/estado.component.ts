import { Estado } from './estado.class';
import { EstadoService } from './estado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  estados: Estado[];
  pesquisa: string;

  constructor(private estadoService: EstadoService) { }

  public pesquisarPorNome(): void {
    if (!this.pesquisa) {
      this.listarEstados();
      return;
    }
    this.estadoService.pesquisarEstado(this.pesquisa).subscribe(
      response => {
        this.estados = response['content'];
      }
    );
  }

  public listarEstados(): void {
    this.estadoService.listarEstado().subscribe(response => this.estados = response['content']);
  }

  ngOnInit() {
    this.listarEstados();
  }

}


import { GrupoService } from './grupo.service';
import { Grupo } from './grupo.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  grupos: Grupo[];
  podeVerDetalhe: boolean = true;

  constructor(private grupoService: GrupoService) { }

  public listarGrupos(): void {
    this.grupos = this.grupoService.getGrupos();
  }

  ngOnInit() {
    this.listarGrupos();
  }

}

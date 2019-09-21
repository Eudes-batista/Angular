import { Grupo } from './grupo.class';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private grupos: Grupo[];

  private inicializarGrupos(): void {
    this.grupos = [
      { codigo: '1', nome: 'PIZZAS' },
      { codigo: '2', nome: 'CARNES' },
      { codigo: '3', nome: 'PEIXES' },
      { codigo: '4', nome: 'FRANGOS' },
    ];
  }

  public getGrupos(): Grupo[] {
    return this.grupos;
  }

  public salvar(grupo: Grupo): void {
    this.grupos.push(grupo);
  }

  public excluirProduto(grupo: Grupo): void {
    const index = this.grupos.indexOf(grupo);
    this.grupos.splice(index, 1);
  }

  public buscarGrupo(codigo: string): Grupo {
    return this.grupos.filter(grupo => grupo.codigo === codigo)[0];
  }


  constructor() {
    this.inicializarGrupos();
  }
}

import { NgForm } from '@angular/forms';
import { PaisService } from './../../pais/pais.service';
import { EstadoPK } from './../estadoPK.class';
import { Pais } from './../../pais/pais.class';
import { Estado } from './../estado.class';
import { EstadoService } from './../estado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-cadastro',
  templateUrl: './estado-cadastro.component.html',
  styleUrls: ['./estado-cadastro.component.css']
})
export class EstadoCadastroComponent implements OnInit {

  estado: Estado;
  paises: Pais[];

  constructor(private estadoService: EstadoService, private paisService: PaisService) { }

  public listarPaises(): void {
    this.paisService.listarPaises(0).subscribe(
      response => {
        this.paises = response['content'];
      }
    );
  }

  public valorInformadoMaiorQueQuatroDigito(): boolean {
    const tamanhoMaximoDoCampo = 2;
    const valorDoCampo: string = String(this.estado.estadoPK.codigo);
    return valorDoCampo.length > tamanhoMaximoDoCampo;
  }

  public salvar(form: NgForm): void {
    this.estado = form.value;
    this.estadoService.salvar(this.estado).subscribe(
      success => {
        console.log('Salvo com sucesso!!');
      }
    );
  }

  compareFn(c1, c2): boolean {
    return c1 && c2 ? c1.nome === c2.nome : c1 === c2;
  }

  ngOnInit() {
    const estadoPK = new EstadoPK();
    const pais: Pais = new Pais();
    pais.codigo = 1058;
    pais.nome = 'BRASIL';
    estadoPK.pais = pais;
    this.estado = new Estado();
    this.estado.estadoPK = estadoPK;
    this.listarPaises();
  }

}

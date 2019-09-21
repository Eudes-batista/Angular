import { AlertaComponent } from './alerta.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  private bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  abrirAlerta(tipoDeAlerta: string, mensagem: string) {
    this.bsModalRef = this.modalService.show(AlertaComponent);
    this.bsModalRef.content.tipoMensagem = tipoDeAlerta;
    this.bsModalRef.content.mensagem = mensagem;
  }

}

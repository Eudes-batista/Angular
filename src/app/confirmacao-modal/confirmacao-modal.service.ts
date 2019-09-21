import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Injectable, EventEmitter, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmacaoModalService<T> {

  private inscricaoVento: EventEmitter<T>;
  private modalRef: BsModalRef;
  private typeCLass: T;

  constructor(private modalService: BsModalService) { }

  public abrirModal(template: TemplateRef<any>, typeClass: T) {
    this.modalRef = this.modalService.show(template);
    this.setTypeClass(typeClass);
  }

  public conformacao(): void {
    this.inscricaoVento.emit(this.typeCLass);
  }

  public fecharModal(): void {
    this.modalRef.hide();
    this.typeCLass = null;
  }

  public setTypeClass(typeClass: T): void {
    this.typeCLass = typeClass;
  }

  public getTypeClass(): T {
    return this.typeCLass;
  }

  public getInscricao(): EventEmitter<T> {
    return this.inscricaoVento;
  }

  public getModalRef(): BsModalRef {
    return this.modalRef;
  }


}

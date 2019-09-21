import { Component, OnInit} from '@angular/core';

import { ConfirmacaoModalService } from './confirmacao-modal.service';

@Component({
  selector: 'app-confirmacao-modal',
  templateUrl: './confirmacao-modal.component.html',
  styleUrls: ['./confirmacao-modal.component.css']
})
export class ConfirmacaoModalComponent<T> implements OnInit {

  constructor(private modalService: ConfirmacaoModalService<T>) { }

  public confirmacao(): void {
    this.modalService.conformacao();
  }

  public fecharModal(): void {
    this.modalService.fecharModal();
  }

  ngOnInit() {
  }

}

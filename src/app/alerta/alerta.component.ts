import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  @Input() tipoMensagem: string;
  @Input() mensagem: string;

  constructor(private bsModalRef: BsModalRef) { }

  public close(): void {
    this.bsModalRef.hide();
  }

  ngOnInit() {
  }

}

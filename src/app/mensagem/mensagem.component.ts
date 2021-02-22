import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensagem } from '../Models/mensagem.models';
import { MensagemService } from '../Services/mensagem.service';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html'
})
export class MensagemComponent implements OnInit {
  public mensagens$: Observable<Mensagem[]>;
  constructor(private data: MensagemService) { }

  ngOnInit(): void {
    this.mensagens$ = this.data.getRandomMention();
  }
}

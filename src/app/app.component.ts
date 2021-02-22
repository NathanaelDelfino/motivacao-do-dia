import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensagem } from './Models/mensagem.models';
import { MensagemService } from './Services/mensagem.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'motivacao-do-dia';

}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Mensagem } from "../Models/mensagem.models";

@Injectable({
    providedIn: 'root'
})

export class MensagemService {
    constructor(private http: HttpClient) { }

    getRandomMention() {
        return this.http.get<Mensagem[]>('http://localhost:3000/mentions/random');
    }
}
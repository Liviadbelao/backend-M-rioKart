import { v4 as uuidv4 } from "uuid";
export class Contato{
    constructor(nome, email, telefone, mensagem ){
        this.id = uuidv4();
       this.nome = nome;
       this.email = email;
       this.telefone = telefone;
       this.mensagem = mensagem;
    }
}
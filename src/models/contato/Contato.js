import { v4 as uuidv4 } from "uuid";
export class Contato{
    constructor(nome, email, imagem,telefone, nascimento ){
        this.id = uuidv4();
       this.nome = nome;
       this.email = email;
       this.imagem = imagem;
       this.telefone = telefone;
       this.nascimento = nascimento;
    }
}
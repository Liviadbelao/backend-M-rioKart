import { v4 as uuidv4 } from "uuid";

// Criação do obejeto, com todas as informações que ele contém
export class Usuario{
    constructor(nome, avatar, idade, descricao, tipo, imagem){
        this.id=uuidv4();
        this.nome=nome;
        this.avatar=avatar;
        this.idade=idade;
        this.descricao=descricao;
        this.tipo=tipo;
        this.imagem=imagem;
    }
}


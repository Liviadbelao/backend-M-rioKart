import { v4 as uuidv4 } from "uuid";

// Criação do obejeto, com todas as informações que ele contém
export class Usuario{
    constructor(nome,idade, imagem, descrição,tipo ){
        this.id=uuidv4();
        this.nome=nome;
        this.idade=idade;
        this.imagem=imagem;
        this.descrição=descrição;
        this.tipo=tipo;
    }
}


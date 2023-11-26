import { v4 as uuidv4 } from "uuid";
export class Mapas{
    constructor(nome, imagem, descricao, inspiracao, copa, trofeus, plataforma ){
        this.id = uuidv4();
       this.nome = nome;
       this.imagem = imagem;
       this.descricao = descricao;
       this.inspiracao = inspiracao;
       this.copa = copa;
       this.trofeus = trofeus
       this.plataforma = plataforma
    }
}
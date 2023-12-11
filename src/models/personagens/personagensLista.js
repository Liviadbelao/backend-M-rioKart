export class PersonagnensLista {
    constructor() {
        this.personagens = []

    }
    addPersonagem(param){
        this.personagens.push(param)
    }
  
    getTodosPersonagens() {

        return this.personagens
    }





}
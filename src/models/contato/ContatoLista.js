export class ContatoLista {
    constructor() {
        this.contatos = []

    }
    addContato(contato) {
        this.contatos.push(contato)
    }

    getTodosContatos() {
        return this.contatos
    }

    removerContato(id) {
        this.contatos = this.contatos.filter((contato) => contato.id !== id)
    }

    getContatoId(id) {
        return this.contatos.find((contato) => contato.id === id)
    }
}
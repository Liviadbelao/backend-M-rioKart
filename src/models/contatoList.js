export class ContatoLista {
    constructor() {
        this.contato = []

    }
    addContacto(contacto) {
        this.contato.push(contacto)
    }
    getTodosContato() {
        return this.contato
    }
    getContactoId(id) {
        return this.contato.find((contacto) => contacto.id == id)
    }
    pegarNome(nome) {
        return this.contato.find((contacto) => contacto.nome == nome)
    }
    atualizarcontacto(id, nome, email, telefone, mensagem) {
        const contacto = this.getContactoId(id);

        if (contacto) {
            contacto.nome = nome;
            contacto.email = email;
            contacto.telefone = telefone;
            contacto.mensagem = mensagem;
        }

        return contacto;

    }
    removerContacto(id) {
        this.contato = this.contato.filter((contacto) => contacto.id != id)
    }
}
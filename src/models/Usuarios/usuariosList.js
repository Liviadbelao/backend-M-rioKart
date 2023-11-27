export class usuarioList {
    // Array dos usuários
    constructor() {
        this.usuarios = [];
    }


    // 
    addUsuarios(usuario) {
        this.usuarios.push(usuario)

    }

    pegarPeloNome(nome){
        return this.usuarios.filter((usuario)=> usuario.nome === nome);
    }
    pegarPeloTipo(tipo){
        return this.usuarios.filter((usuario)=> usuario.tipo === tipo);
    }

    pegarPeloIdade(idade){
        return this.usuarios.filter((usuario)=> usuario.idade === idade);
    }


    pegarUsuariosId(id) {
        return this.usuarios.filter((usuario) => usuario.id === id)
    }

    pegarTodos() {
        return this.usuarios
    }

    editarUsuario(id, nome, idade, imagem, descricao, tipo) {
        const usuario = this.pegarTodos(id);

        if (usuario) {
            usuario.nome = nome;
            usuario.idade = idade;
            usuario.imagem = imagem;
            usuario.descricao = descricao;
            usuario.tipo = tipo;
        }

        return usuario;

    }


    deletarUsuario(id) {
        if (!id) {
            console.log('nao deu')
        }
        console.log(id);
       
        this.usuarios = this.usuarios.filter((user) => user.id !== id)
    }
}

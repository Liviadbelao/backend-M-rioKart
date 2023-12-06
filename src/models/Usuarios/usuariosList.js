export class UsuarioList {
    // Array dos usuários
    constructor() {
        this.usuarios = [];
    }


    // 
    addUsuarios(usuario) {
        this.usuarios.push(usuario)

    }

    pegarPeloNome(nome) {
        return this.usuarios.filter((usuario) => usuario.nome === nome);
    }
    pegarPeloTipo(tipo) {
        return this.usuarios.filter((usuario) => usuario.tipo === tipo);
    }

    pegarPeloIdade(idade) {
        return this.usuarios.filter((usuario) => usuario.idade === idade);
    }


    pegarUsuariosId(id) {
        return this.usuarios.find((usuario) => usuario.id === id)
    }

    pegarTodos() {
        return this.usuarios
    }

    editarUsuario(id, nome,avatar, idade, descricao, tipo, imagem) {
        const usuario = this.pegarUsuariosId(id);
        console.log("BBBBBBBBBBBBBBBBBBBBBBBBBB");
        console.log(id, nome,avatar, idade, descricao, tipo, imagem);
        if (usuario) {
            usuario.nome = nome;
            usuario.avatar = avatar;
            usuario.idade = idade;
            usuario.descricao = descricao;
            usuario.tipo = tipo;
            usuario.imagem = imagem;
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

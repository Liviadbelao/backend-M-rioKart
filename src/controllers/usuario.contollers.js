import { Usuario } from '../models/Usuarios/Usuarios.js'
import { UsuarioList } from '../models/Usuarios/usuariosList.js'
import membros from '../data/membros.js';


const lista = new UsuarioList();

membros.map((membro) => {
    const novoMembro = new Usuario(membro.nome, membro.avatar, membro.idade, membro.descricao, membro.tipo, membro.imagem)
    lista.addUsuarios(novoMembro)
})

export const pegarUsuariosId = (req, res) => {
    const { id } = req.params;

    const usuario = lista.pegarUsuariosId(id);
    return res.status(200).send({ usuario })
}


export const pegarTodos = (req, res) => {
    const { nome, tipo, idade } = req.query;
    let usuarios = lista.pegarTodos();
    if (nome) {
        usuarios = lista.pegarPeloNome(nome)
    }
    if (tipo) {
        usuarios = lista.pegarPeloTipo(tipo)
    }
    if (idade) {
        usuarios = lista.pegarPeloIdade(Number(idade))
    }

    if (usuarios.length < 0) {
        return res.status(400).json({ message: "USuario não enco" })


    } else {
        let contador = usuarios.length
        return res.status(200).send({ contador, usuarios })
    }
}

export const addUsuarios = (req, res) => {
    const { nome, avatar, idade, descricao, tipo, imagem } = req.body

    let error = [];

    if (nome.length < 3 || nome.length >20) {
        error.push('O tamanho do nome deve ser entre 3 a 20 caracteres')
    }
    if (descricao.length < 10 || descricao.length > 100) {
        error.push('O tamanho da descrição deve ser entre 10 a 100 caracteres')
    }

    if (idade < 13) {
        error.push("o usuario deve ser maior de 13 anos")
    }

    /*     if (!imagem.match(/(https?:\/\/.*.(?:png|jpg|jpeg))/i)) {
            error.push("A imagem deve um URL válido que termine em png, jpg ou jpeg.")
        } */

    if (error.length > 0) {
        return res.status(400).send({ message: error })
    } else {
        const usuario = new Usuario(nome, avatar, idade, descricao, tipo, imagem)
        lista.addUsuarios(usuario);
        return res.status(201).send({ message: "usuariooo criooooouuu", usuario })
    }

}

export const editarUsuario = (req, res) => {
    const { id } = req.params;
    let { nome, avatar, idade, descricao, tipo, imagem } = req.body;

    console.log("AAAAAAAAAAAAAA");
    console.log(id, nome, avatar,idade, descricao, tipo, imagem);

    let error = [];

    if (nome.length > 40) {
        error.push("o nome deve ter menos que 40 caracteres")
    }
    if (descricao.length > 40) {
        error.push("o descricao deve ter menos que 40 caracteres")
    }

    if (idade.length < 13) {
        error.push("o usuario deve ser maior de 13 anos")
    }



    if (!imagem.match(/(https?:\/\/.*.(?:png|jpg|jpeg))/i)) {
        error.push("A imagem deve um URL válido que termine em png, jpg ou jpeg.")
    }

    if (error.length) {
        return res.status(400).send({ message: error })
    }
    console.log("Deu CEEEEEEEEEEERRRRRRRTOOOOOOOOOO");
    const usuarioAtualizado = lista.editarUsuario(id, nome, avatar, idade, descricao, tipo, imagem)
    return res.status(200).send({ message: `Atualizou boy`, usuarioAtualizado })

}

export const deletarUsuario = ((req, res) => {
    const { id } = req.params;
    const usuario = lista.pegarUsuariosId(id);

    // if (!usuario) {
    //     res.status(404).send({ message: "Achei ninguem não :/" });
    // }

    console.log("teste", id)
    lista.deletarUsuario(id);

    return res.send({ message: `Apagou mona`, usuario });
});
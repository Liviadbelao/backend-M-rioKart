    //Importações
    import { Usuario } from '../models/Usuarios/Usuarios.js'
    import { UsuarioList } from '../models/Usuarios/usuariosList.js'
    import membros from '../data/membros.js';

    //Criando instância de lista
    const lista = new UsuarioList();

    //Colocando os itens já existentes e os novos itens criados em um unico array
    membros.map((membro) => {
        const novoMembro = new Usuario(membro.nome, membro.avatar, membro.idade, membro.descricao, membro.tipo, membro.imagem)
        lista.addUsuarios(novoMembro)
    })
    //Função de pegar usuário por id
    export const pegarUsuariosId = (req, res) => {

        const { id } = req.params;

        const usuario = lista.pegarUsuariosId(id);
        return res.status(200).send({ usuario })

    }

    //Função de verificação de imagem
    const urlValida = (imagem) => {
        if (imagem && imagem.match(/\.(jpeg|jpg|gif|png)$/) !== null) {
            return true;
        } else {
            return false;
        }
    };

    //Função de pegar a lista de usuários
    export const pegarTodos = (req, res) => {

        const { nome, tipo, idade } = req.query;
        let usuarios = lista.pegarTodos();

        //Filtrar pelo nome
        if (nome) {
            usuarios = lista.pegarPeloNome(nome)
        }

        //Filtrar pelo tipo
        if (tipo) {
            usuarios = lista.pegarPeloTipo(tipo)
        }

        //Filtrar Pela Idade
        if (idade) {
            usuarios = lista.pegarPeloIdade(idade)
        }

        if (usuarios.length < 0) {
            return res.status(400).json({ message: "USuario não enco" })

        } else {
            let contador = usuarios.length
            return res.status(200).send({ contador, usuarios })
        }
    }

    //Função de criar um novo usuário
    export const addUsuarios = (req, res) => {
        const { nome, avatar, idade, descricao, tipo, imagem } = req.body

        let error = [];

        //Verificações
        if (!nome) {
            error.push('Preencha o campo Nome')
        } else if (nome.length < 3 || nome.length > 20) {
            error.push('O tamanho do nome deve ser entre 3 a 20 caracteres')
        }

        if (!avatar) {
            error.push("preencha o campo Avatar")
        }

        if (!idade) {
            error.push("Preencha o campo idade")
        } else if (idade < 13) {
            error.push("o usuario deve ser maior de 13 anos")
        } else if (idade > 90) {
            error.push("o usuario precisa ter menos de 90 anos")
        }

        if (!descricao) {
            error.push("Preencha o campo Descrição")
        } else if (descricao.length < 10 || descricao.length > 200) {
            error.push('O tamanho da descrição deve ser entre 10 a 200 caracteres')
        }

        if (!tipo) {
            error.push('Preencha o campo Tipo')
        }

        if (!imagem) {
            error.push('Preencha o campo Imagem')
        } else if (!urlValida(imagem)) {
            error.push('A imagem precisa ter um formato válido: .jpeg/.jpg/.gif/.png')
        }



        if (error.length > 0) {
            return res.status(400).send({ message: error })
        }
        const usuario = new Usuario(nome, avatar, idade, descricao, tipo, imagem)
        lista.addUsuarios(usuario);
        return res.status(201).send({ "Usuario Criado": usuario })


    }

    //Função de editar usuário existente
    export const editarUsuario = (req, res) => {

        const { id } = req.params;
        let { nome, avatar, idade, descricao, tipo, imagem } = req.body;
        let usuario = lista.pegarUsuariosId(id);

        //Verificando se o mapa do id passado existe
        if (!usuario) {
            return res.status(404).send({ message: "id não encontrado" });
        }

        let error = [];

        if (!nome) {
            error.push('Preencha o campo Nome')
        } else if (nome.length < 3 || nome.length > 20) {
            error.push('O tamanho do nome deve ser entre 3 a 20 caracteres')
        }

        if (!avatar) {
            error.push("preencha o campo Avatar")
        }

        if (!idade) {
            error.push("Preencha o campo idade")
        } else if (idade < 13) {
            error.push("o usuario deve ser maior de 13 anos")
        } else if (idade > 90) {
            error.push("o usuario precisa ter menos de 90 anos")
        }

        if (!descricao) {
            error.push("Preencha o campo Descrição")
        } else if (descricao.length < 10 || descricao.length > 200) {
            error.push('O tamanho da descrição deve ser entre 10 a 200 caracteres')
        }

        if (!tipo) {
            error.push('Preencha o campo Tipo')
        }

        if (!imagem) {
            error.push('Preencha o campo Imagem')
        } else if (!urlValida(imagem)) {
            error.push('A imagem precisa ter um formato válido: .jpeg/.jpg/.gif/.png')
        }


        if (error.length > 0) {
            return res.status(400).send({ message: error })
        }

        const usuarioAtualizado = lista.editarUsuario(id, nome, avatar, idade, descricao, tipo, imagem)
        return res.status(200).send({ "Usuário Atualizado": usuarioAtualizado })

    }

    //Função de deletar usuário
    export const deletarUsuario = ((req, res) => {

        const { id } = req.params;
        const usuario = lista.pegarUsuariosId(id);

        if (!usuario) {
            res.status(404).send({ message: "Achei ninguem não :/" });
        }

        console.log("teste", id)
        lista.deletarUsuario(id);

        return res.send({ message: `Apagou mona`, usuario });
    });
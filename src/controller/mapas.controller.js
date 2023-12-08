import mapas from "../data/mapas.js";
import { Mapas } from "../models/mapas.js";
import { MapasLista } from "../models/mapasList.js";

const lista = new MapasLista();
mapas.map((mapa) => {
    const novoMapa = new Mapas(mapa.nome, mapa.imagem, mapa.descricao, mapa.inspiracao, mapa.copa, mapa.trofeus, mapa.plataforma)
    lista.addMapa(novoMapa);
})

export const getMapas = (req, res) => {


    const { nome, trofeus, copa } = req.query;

    const dados = {
        nome,
        trofeus,
        copa
    }

    let listaMapas = lista.getTodosMapas(dados);

    return res.status(200).send({
        total: listaMapas.length
        , listaMapas
    })
}
export const getMapasId = (req, res) => {

    const { id } = req.params

    const mapas = lista.getMapaId(id)
    if (!mapas) {
        return res.status(404).send({ message: `não achou ${id}` })
    }
    return res.status(200).send({ message: "mapas do id:", mapas })

}


export const criarMapas = (req, res) => {

    let errors = [];

    let { nome, imagem, descricao, inspiracao, copa, trofeus, plataforma } = req.body;

    const mapa = new Mapas(nome, imagem, descricao, inspiracao, copa, trofeus, plataforma)

    if (nome == '') {
        errors.push('Preencha o campo Nome');
    } else if (nome.length < 3 || nome.length > 20) {
        errors.push('O tamanho do nome deve ser entre 3 a 20 caracteres')
    }

    if (imagem == '') {
        errors.push('Preencha o campo Imagem')
    } else if (!urlValida(imagem)) {
        errors.push('A imagem precisa ter um formato válido: .jpeg/.jpg/.gif/.png')
    }

    if (descricao == '') {
        errors.push('Preencha o campo Descrição')
    } else if (descricao.length < 10 || descricao.length > 100) {
        errors.push('O tamanho da descrição deve ser entre 10 a 100 caracteres')
    }

    if (inspiracao == '') {
        errors.push('Preencha o campo Inspiração')
    } else if (inspiracao.length < 10 || inspiracao.length > 100) {
        errors.push('O tamanho da inspiração deve ser entre 10 a 100 caracter')
    }

    if (!copa) {
        errors.push('Selecione uma copa')
    }

    if (trofeus == '') {
        errors.push('Preenca a quatidade de troféus')
    } else if (trofeus < 500 || trofeus > 5000) {
        errors.push('Quantidade de Troféus inválida')
    } else if (trofeus % 100 !== 0) {
        errors.push('Quantidade de Troféus Inválida, insira um valor que seja multiplo de 100')
    }

    if (plataforma == '') {
        errors.push('Preencha o campo Plataforma')
    }
    if (errors.length != 0) {
        return res.status(400).json(errors)
    }

    lista.addMapa(mapa)

    console.log("ta criando");

    return res.status(200).send({ message: "mapa criado", mapa })


}

export const editarMapas = (req, res) => {
    const { id } = req.params;
    let { nome, imagem, descricao, inspiracao, copa, trofeus, plataforma } = req.body;
    let mapa = lista.getMapaId(id);

    if (!mapa) {
        return res.status(404).send({ message: "id não encontrado" });
    }

    const mapaAtualizado = lista.atualizarmapa(id, nome, imagem, descricao, inspiracao, copa, trofeus, plataforma);

    return res.status(200).send({ message: "roupa atualizada:", mapaAtualizado });
}

export const deletarMapa = (req, res) => {
    const { id } = req.params;
    const mapa = lista.getMapaId(id)
    if (!mapa) {
        return res.status(404).send({ message: "não foi removido corretamente" })
    }
    lista.removerMapa(id)

    return res.status(200).send({ messege: "mapa removido", mapa })
}

const urlValida = (imagem) => {
    if (imagem && imagem.match(/\.(jpeg|jpg|gif|png)$/) !== null) {
        return true;
    } else {
        return false;
    }
};

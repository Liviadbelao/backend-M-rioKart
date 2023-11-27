import mapas from "../data/mapas.js";
import { Mapas } from "../models/mapas.js";
import { MapasLista } from "../models/mapasList.js";

const lista = new MapasLista();
mapas.map((mapa) => {
    const novoMapa = new Mapas(mapa.nome, mapa.imagem, mapa.descricao, mapa.inspiracao, mapa.copa, mapa.trofeus, mapa.plataforma)
    lista.addMapa(novoMapa);
})
export const getMapas = (req, res) => {


    const listaMapas = lista.getTodosMapas()
    return res.status(200).send({ listaMapas })
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

    let { nome, imagem, descricao, inspiracao, copa, trofeus, plataforma } = req.body;

    const mapa = new Mapas(nome, imagem, descricao, inspiracao, copa, trofeus, plataforma)
    lista.addMapa(mapa)

    console.log("ta criando");

    return res.status(200).send({ message: "mapa criado", mapa })


}


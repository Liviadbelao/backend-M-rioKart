import mapas from "../data/mapas.js";
import { Mapas } from "../models/mapas.js";
import { MapasLista } from "../models/mapasList.js";

const lista = new MapasLista();
lista.addMapa(mapas)
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
    
    return res.status(200).send({ message: "mapa criado", mapa })


}


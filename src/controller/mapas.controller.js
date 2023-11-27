/* import mapas from "../data/mapas.js"; */

import { Mapas } from "../models/mapas.js";
import { MapasLista } from "../models/mapasList.js";

const lista = new MapasLista();
/* lista.addMapa(mapas) */
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

export const editarMapas = (req, res) =>{
    const { id } = req.params;
    let { nome, imagem, descricao, inspiracao, copa, trofeus, plataforma } = req.body;
    let mapa = lista.getMapaId(id);



    if (!mapa) {
        return res.status(404).send({ message: "id não encontrado" });
    }


    const mapaAtualizado = lista.atualizarmapa(id, nome, imagem, descricao, inspiracao, copa, trofeus, plataforma);
    
    return res.status(200).send({ message: "roupa atualizada:", mapaAtualizado });
}

export const deletarMapa = (req, res) =>{
    const { id } = req.params;
    const mapa = lista.getMapaId(id)
    if (!mapa) {
        return res.status(404).send({ message: "não foi removido corretamente" })
    }
    lista.removerMapa(id)

    return res.status(200).send({ messege: "mapa removido", mapa})
}

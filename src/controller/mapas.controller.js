import mapas from "../data/mapas.js";
import { Mapas } from "../models/mapas.js";
import { MapasLista } from "../models/mapasList.js";

const lista = new MapasLista();
mapas.map((mapa) => {
    const novoMapa = new Mapas(mapa.nome, mapa.imagem, mapa.descricao, mapa.inspiracao, mapa.copa, mapa.trofeus, mapa.plataforma)
    lista.addMapa(novoMapa);
})
console.log(lista)
export const getMapas = (req, res) => {


    const listaMapas = lista.getTodosMapas()
    const { nome } = req.query;
    const { trofeus } = req.query;
 



    if ( nome, trofeus) {

       listaMapas = lista.pegarTrofeus(trofeus);
       listaMapas = lista.pegarNome(nome);
       

    }  else {
       listaMapas = lista.getTodosMapas();
    }
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
   
    if(nome == ""|| imagem == "" || descricao == "" || inspiracao == "" || copa == ""|| trofeus == ""|| plataforma == ""){
        return res.status(400).send({ message: "todos os campos devem estar preenchidos"}) 
    }
    if(nome.length < 3|| nome.length > 20 ){
        return res.status(400).send({ message: "nome de tamanho invalido"}) 
    }
    if(descricao.length < 20|| descricao.length > 500 ){
        return res.status(400).send({ message: "descrição de tamanho invalido"}) 
    }
    if(trofeus < 500|| trofeus > 5000 ){
        return res.status(400).send({ message: "trofeus de quantidade invalida"}) 
    }

    if(copa !== "copa folha"&& copa !== "copa flor" && copa !== "copa ovo" && copa !== "copa leve" && copa !== "copa casco" && copa !== "copa seta"&& copa !== "copa estrela"&& copa !== "copa flor e cerejeira"){
        return res.status(400).send({ message: "copa inválida"}) 
    }
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

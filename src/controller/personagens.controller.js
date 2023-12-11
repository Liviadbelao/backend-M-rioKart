import personagem from "../data/personagens.js"
/* import { PersonagnensLista } from "../models/personagens/personagensLista.js" */




export const getPersonagens = (req, res) => {

    let listaP =  personagem;

    return res.status(200).send(
       listaP
    )
}





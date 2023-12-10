import personagem from "../data/personagens.js"
import { PersonagnensLista } from "../models/personagens/personagensLista.js"


const listaPs = new PersonagnensLista();
listaPs.addPersonagem(personagem)

export const getPersonagens = (req, res) => {

    let listaP = listaPs.getTodosPersonagens();

    return res.status(200).send({
      message: listaPs
    })
}





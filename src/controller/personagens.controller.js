// Importações
import personagem from "../data/personagens.js";

// Função para pegar lista de personagens
export const getPersonagens = (req, res) => {
  let listaP = personagem;

  return res.status(200).send({ quantidade: listaP.length, Lista: listaP });
};
import { Contato } from "../models/contato/contato.js";
import { ContatoLista } from "../models/contato/ContatoLista.js";
const lista = new ContatoLista();

export const getContatos = (req, res) => {

    let contatos = lista.getTodosContatos();

      return res.status(200).json(contatos);

  };

  export const criarContato = (req, res) => {
    const { nome, email, imagem, telefone, nascimento} = req.body;
    const contato = new Contato(nome, email, imagem, telefone, nascimento);
  
    lista.addContato(contato);
  
    return res.status(201).send( contato);
  }; 

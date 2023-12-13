//Importações
import { Contato } from "../models/contato/contato.js";
import { ContatoLista } from "../models/contato/ContatoLista.js";

//Criando instância da lista
const lista = new ContatoLista();

//Criando função de pegar lista de contatos
export const getContatos = (req, res) => {

  let contatos = lista.getTodosContatos();
  return res.status(200).json(contatos);

};

//Criando função de adicionar um novo contato
export const criarContato = (req, res) => {
  const { nome, email, imagem, telefone, nascimento } = req.body;
  const contato = new Contato(nome, email, imagem, telefone, nascimento);

  //Adicionando novo contato a nossa lista 
  lista.addContato(contato);

  return res.status(201).send(contato);
}; 


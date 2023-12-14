//Importações
import { Contato } from "../models/contato/contato.js";
import { ContatoLista } from "../models/contato/ContatoLista.js";

//Criando instância da lista
const lista = new ContatoLista();

//Criando função de pegar lista de contatos
export const getContatos = (req, res) => {

  let contatos = lista.getTodosContatos();
  return res.status(200).send({ quantidade: contatos.length, Lista: contatos });

};

//Criando função de adicionar um novo contato
export const criarContato = (req, res) => {

  let errors = [];

  const { nome, email, telefone, nascimento } = req.body;
  const contato = new Contato(nome, email, telefone, nascimento);

  //Verificações
  if (!nome) {
    errors.push('Preencha o campo Nome');
  } else if (nome.length < 3 || nome.length > 20) {
    errors.push('O tamanho do nome deve ser entre 3 a 20 caracteres')
  }

  if (!email) {
    errors.push('Preencha o campo Imagem')
  } else if (!isEmailValid(email)) {
    errors.push('O email precisa conter "@"')
  }

  if (!telefone) {
    errors.push('Preencha o campo Telefone');
  }else if (isNaN(telefone)) {
    errors.push('O telefone deve conter apenas números');
  } else if (telefone.length != 11) {
    errors.push('O telefone deve conter 11 dígitos');
  }

  if (!nascimento) {
    errors.push('Preencha o campo Nascimento')
  }

  if (errors.length != 0) {
    return res.status(400).json(errors)
  }

  //Adicionando novo contato a nossa lista 
  lista.addContato(contato);

  return res.status(201).send(contato);
};

//Função de deletar um contato existente
export const deletarContato = (req, res) => {

  const { id } = req.params;
  const contato = lista.getContatoId(id)

  //Verificando se o mapa existe
  if (!contato) {
      return res.status(404).send({ message: "não foi removido corretamente" })
  }

  lista.removerContato(id)

  return res.status(200).send({ messege: "contato removido", contato })
}

//Função de pegar mapa por id
export const getContatoId = (req, res) => {

  const { id } = req.params

  const contato = lista.getContatoId(id)

  //Verificando se o mapa existe
  if (!contato) {
      return res.status(404).send({ message: `não achou o contato de ID: ${id}` })
  }
  return res.status(200).send({ message: "contato do id:", contato })
}

//Função de verificação de email
function isEmailValid(email) {
  return email.includes('@');
}

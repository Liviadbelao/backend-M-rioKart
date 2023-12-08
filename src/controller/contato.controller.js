import { Contato } from "../models/contato.js";
import { ContatoLista } from "../models/contatoList.js";

const lista = new ContatoLista();
console.log(lista)
export const getContato = (req, res) => {


    let listaContato = lista.getTodosContato()
    const { nome } = req.query;

    if ( nome ) {
       listaContato = lista.pegarNome(nome);
       

    }  else {
       listaContato = lista.getTodosContato();
    }
    return res.status(200).send(listaContato)
}
export const getContatoId = (req, res) => {

    const { id } = req.params

    const contato = lista.getContactoId(id)
    if (!contato) {
        return res.status(404).send({ message: `não achou ${id}` })
    }
    return res.status(200).send({ message: "contato do id:", contato })

}


export const criarContato = (req, res) => {

    let { nome, email, telefone, mensagem} = req.body;
  
    const contacto = new Contato(nome, email, telefone, mensagem)
   
    if(nome == ""){
        return res.status(400).send({ message: "todos os campos devem estar preenchidos"}) 
    }
    if(nome < 3|| nome > 20 ){
        return res.status(400).send({ message: "nome de tamanho invalido"}) 
    }
 /*    if(email < 10|| email > 500 ){
        return res.status(400).send({ message: "email invalido"}) 
    }
    if(telefone < 8|| telefone > 10 ){
        return res.status(400).send({ message: "telefone invalido"}) 
    }
    if(mensagem < 3|| mensagem > 20 ){
        return res.status(400).send({ message: "mensagem muito curta"}) 
    } */
    lista.addContacto(contacto)

    console.log("ta criando");

    return res.status(200).send({ message: "contato criado", contacto })


}

export const editarContato = (req, res) =>{
    const { id } = req.params;
    let { nome } = req.body;
    let contacto = lista.getContactoId(id);



    if (!contacto) {
        return res.status(404).send({ message: "id não encontrado" });
    }


    const contactoAtualizado = lista.atualizarcontacto(id, nome);
    
    return res.status(200).send({ message: "roupa atualizada:", contactoAtualizado });
}

export const deletarContacto = (req, res) =>{
    const { id } = req.params;
    const contacto = lista.getContactoId(id)
    console.log(id)
    if (!contacto) {
        return res.status(404).send({ message: "não foi removido corretamente" })
    }
    lista.removerContacto(id)

    return res.status(200).send({ messege: "contato removido", contacto})
}

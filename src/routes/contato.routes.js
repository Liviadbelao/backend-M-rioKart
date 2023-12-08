import { Router } from "express";
import { getContato,
getContatoId, criarContato, editarContato, deletarContacto } from "../controller/contato.controller.js";
const contatoRouter = Router();

contatoRouter.post("/", criarContato)
contatoRouter.get("/",  getContato )
contatoRouter.get("/:id", getContatoId)

contatoRouter.put("/:id", editarContato )
contatoRouter.delete("/:id", deletarContacto)



export default contatoRouter;
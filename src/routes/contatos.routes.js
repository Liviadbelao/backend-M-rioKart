import { Router } from "express";
import { getContatos, criarContato, deletarContato, getContatoId } from "../controller/contato.controller.js";
const contatosRouter = Router();

contatosRouter.post("/", criarContato)
contatosRouter.get("/",  getContatos )
contatosRouter.delete("/:id", deletarContato)
contatosRouter.get("/:id", getContatoId)


export default contatosRouter;
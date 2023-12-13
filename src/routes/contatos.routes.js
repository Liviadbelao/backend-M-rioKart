import { Router } from "express";
import { getContatos, criarContato } from "../controller/contato.controller.js";
const contatosRouter = Router();

contatosRouter.post("/", criarContato)
contatosRouter.get("/",  getContatos )

export default contatosRouter;
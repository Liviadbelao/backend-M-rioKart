import { Router } from "express";
import usuario from "./usuario.routes.js"
import marioPersonagem from "./personagens.routes.js"
import mapasRouter from './mapas.routes.js'
import contatosRouter from './contatos.routes.js'

const rotas = Router();

rotas.use("/mapas", mapasRouter);
rotas.use("/usuario", usuario);
rotas.use("/personagens", marioPersonagem);
rotas.use("/contatos", contatosRouter);


rotas.get("/", (req, res)=>{
    return res.status(200).send({ message: "servidor ok!" })
})

export default rotas;
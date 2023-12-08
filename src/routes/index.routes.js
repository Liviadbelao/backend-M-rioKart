import { Router } from "express";


import mapasRouter from './mapas.routes.js'
import contatoRouter from "./contato.routes.js";

const rotas = Router();

rotas.use("/mapas", mapasRouter);
rotas.use("/contato", contatoRouter);


rotas.get("/", (req, res)=>{
    return res.status(200).send({ message: "servidor ok!" })
})

export default rotas;
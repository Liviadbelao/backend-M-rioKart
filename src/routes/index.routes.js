import { Router } from "express";


import mapasRouter from './mapas.routes.js'

const rotas = Router();

rotas.use("/mapas", mapasRouter);


rotas.get("/", (req, res)=>{
    return res.status(200).send({ message: "servidor ok!" })
})

export default rotas;
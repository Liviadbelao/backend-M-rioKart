import { Router } from "express";
import { getPersonagens } from "../controller/personagens.controller.js";


const rotaPersonagem = Router();

rotaPersonagem.get("/", getPersonagens)

export default rotaPersonagem
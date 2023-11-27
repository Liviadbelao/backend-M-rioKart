import { Router } from "express";
import RotasUsuarios from "./usuario.routes.js";

// Rota principal
const rotas = Router();

rotas.use("/usuario",RotasUsuarios);

export default rotas;
import { Router } from "express";
import { addUsuarios, deletarUsuario, editarUsuario, pegarTodos, pegarUsuariosId } from "../controllers/usuario.contollers.js";

// Requisições
const RotasUsuarios = Router();

RotasUsuarios.get("/:id",pegarUsuariosId)
RotasUsuarios.post("/",addUsuarios)
RotasUsuarios.get("/",pegarTodos)
RotasUsuarios.put("/:id",editarUsuario)
RotasUsuarios.delete("/:id",deletarUsuario)

export default RotasUsuarios;
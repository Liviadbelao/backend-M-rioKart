import { Router } from "express";
import { getMapas,
getMapasId, criarMapas, editarMapas, deletarMapa } from "../controller/mapas.controller.js";
const mapasRouter = Router();

mapasRouter.post("/", criarMapas)
mapasRouter.get("/",  getMapas )
mapasRouter.get("/:id", getMapasId)

mapasRouter.put("/:id", editarMapas )
mapasRouter.delete("/:id", deletarMapa)



export default mapasRouter;
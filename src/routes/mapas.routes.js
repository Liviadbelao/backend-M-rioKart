import { Router } from "express";
import { getMapas } from "../controller/mapas.controller.js";
const mapasRouter = Router();

mapasRouter.post("/",)
mapasRouter.get("/",  getMapas )
mapasRouter.get("/:id", )

mapasRouter.put("/:id", )
mapasRouter.delete("/:id", )



export default mapasRouter;
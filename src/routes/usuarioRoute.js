import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController.js";
import { validId, validUser } from "../middlewares/globalMiddlewares.js";

const route = Router()

route.post("/", UsuarioController.create)

route.get("/", UsuarioController.findAll)
route.get("/:id", validId, validUser,  UsuarioController.findById)

route.patch("/:id", validId, validUser, UsuarioController.update)

route.delete("/:id", validId, validUser, UsuarioController.delete)
export default route
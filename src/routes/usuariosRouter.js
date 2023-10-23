import { Router } from "express";
import UsuariosController from "../controllers/UsuariosController.js";
import { validId, validUser } from "../middlewares/globalMiddlewares.js";

const router = Router()

// basic CRUD
router.post("/", UsuariosController.create)
router.get("/", UsuariosController.findAll)
router.get("/:id", validId, validUser,  UsuariosController.findById)
router.patch("/:id", validId, validUser, UsuariosController.update)
router.delete("/:id", validId, validUser, UsuariosController.delete)

export default router
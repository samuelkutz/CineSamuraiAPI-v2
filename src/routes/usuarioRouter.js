import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController.js";
import { validId, validUser } from "../middlewares/globalMiddlewares.js";

const router = Router()

// basic CRUD
router.post("/", UsuarioController.create)
router.get("/", UsuarioController.findAll)
router.get("/:id", validId, validUser,  UsuarioController.findById)
router.patch("/:id", validId, validUser, UsuarioController.update)
router.delete("/:id", validId, validUser, UsuarioController.delete)

export default router
import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController.js";
import GlobalMiddlewares from "../middlewares/globalMiddlewares.js";

const router = Router()

// basic CRUD
router.post("/", UsuarioController.create)
router.get("/", UsuarioController.findAll)
router.get("/:id", GlobalMiddlewares.validId, GlobalMiddlewares.validUser,  UsuarioController.findById)
router.patch("/:id", GlobalMiddlewares.validId, GlobalMiddlewares.validUser, UsuarioController.update)
router.delete("/:id", GlobalMiddlewares.validId, GlobalMiddlewares.validUser, UsuarioController.delete)

export default router
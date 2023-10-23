import { Router } from "express";
import FilmeController from "../controllers/FilmeController.js";
import GlobalMiddlewares from "../middlewares/globalMiddlewares.js";

const router = Router()

// basic CRUD
router.post("/", FilmeController.create)
router.get("/", FilmeController.findAll)
router.get("/:id", GlobalMiddlewares.validId, GlobalMiddlewares.validFilme,  FilmeController.findById)
router.patch("/:id", GlobalMiddlewares.validId, GlobalMiddlewares.validFilme, FilmeController.update)
router.delete("/:id", GlobalMiddlewares.validId, GlobalMiddlewares.validFilme, FilmeController.delete)

export default router
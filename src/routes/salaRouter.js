import { Router } from "express";
import SalaController from "../controllers/SalaController.js";
import GlobalMiddlewares from "../middlewares/globalMiddlewares.js";

const router = Router()

// basic CRUD
router.post("/", SalaController.create)
router.get("/", SalaController.findAll)
router.get("/:id", GlobalMiddlewares.validId, GlobalMiddlewares.validSala,  SalaController.findById)
router.patch("/:id", GlobalMiddlewares.validId, GlobalMiddlewares.validSala, SalaController.update)
router.delete("/:id", GlobalMiddlewares.validId, GlobalMiddlewares.validSala, SalaController.delete)

export default router
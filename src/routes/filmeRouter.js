import { Router } from "express";
import FilmeController from "../controllers/FilmeController.js";

const router = Router()

// basic CRUD
router.post("/", FilmeController.create)
router.get("/", FilmeController.findAll)
router.get("/:id",  FilmeController.findById)
router.patch("/:id", FilmeController.update)
router.delete("/:id", FilmeController.delete)

export default router
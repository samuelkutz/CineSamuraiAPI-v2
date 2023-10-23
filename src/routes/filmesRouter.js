import { Router } from "express";
import FilmesController from "../controllers/FilmesController.js";

const router = Router()

// basic CRUD
router.post("/", FilmesController.create)
router.get("/", FilmesController.findAll)
router.get("/:id",  FilmesController.findById)
router.patch("/:id", FilmesController.update)
router.delete("/:id", FilmesController.delete)

export default router
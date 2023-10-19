import { Router } from "express";
import UserController from "../controllers/UserController.js";
const route = Router()

route.post("/", UserController.create)
route.get("/", UserController.findAll)
route.get("/:id", UserController.findById)
route.patch("/:id", UserController.update)
export default route
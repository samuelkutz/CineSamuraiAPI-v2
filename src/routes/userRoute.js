import { Router } from "express";
import UserController from "../controllers/UserController.js";
import { validId, validUser } from "../middlewares/globalMiddlewares.js";

const route = Router()

route.post("/", UserController.create)

route.get("/", UserController.findAll)
route.get("/:id", validId, validUser,  UserController.findById)

route.patch("/:id", validId, validUser, UserController.update)

route.delete("/:id", validId, validUser, UserController.delete)
export default route
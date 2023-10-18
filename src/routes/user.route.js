import { Router } from "express";
import UserController from "../controllers/user.controller.js";
const route = Router()

route.post("/", UserController.create)

export default route
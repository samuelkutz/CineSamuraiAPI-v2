import { Router } from "express";
import AuthController from "../controllers/AuthController.js";

const router = Router()

router.post("/", AuthController.login) 

export default router
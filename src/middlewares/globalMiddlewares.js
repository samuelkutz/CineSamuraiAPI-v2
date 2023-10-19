import mongoose from "mongoose";
import UserService from "../services/UserService.js";

export const validId= (req, res, next) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "ID de usuário inválido" })
    }

    req.user = user

    next()
}

export const validUser = async (req, res, next) => {
    const id = req.params.id

    const user = await UserService.findById(id)

    if (!user) {
        return res.status(400).send({ message: "Usuário não encontrado" })
    }

    req.id = id

    next()
}
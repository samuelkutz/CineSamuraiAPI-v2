import mongoose from "mongoose";
import UsuarioService from "../services/UsuarioService.js";

export const validId = (req, res, next) => {
    try {
        const id = req.params.id

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "ID de usuário inválido" })
        }

        next()
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: err.message })
    }
}

export const validUser = async (req, res, next) => {
    try {
        const id = req.params.id

        const user = await UsuarioService.findById(id)

        if (!user) {
            return res.status(400).send({ message: "Usuário não encontrado" })
        }

        // saving these infos in the req so we dont have to ask again to the DB 
        req.id = id
        req.user = user

        next()
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: err.message })
    }
}
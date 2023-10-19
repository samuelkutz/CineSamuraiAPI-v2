import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    senha : {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    }
})

export const User = mongoose.model("User", UserSchema)
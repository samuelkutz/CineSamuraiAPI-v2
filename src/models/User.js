import mongoose from "mongoose";
import bcrypt from "bcrypt"

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true,
        select: false // this is for the DB so it DOES NOT return the password 
    },
    telefone: {
        type: String,
        required: true
    }
}, {
    versionKey: false
})

UserSchema.pre("save", async function(next) {
    this.senha = await bcrypt.hash(this.senha, 10) // basic hash encryption (needs to be async)
    next()
})

export const User = mongoose.model("User", UserSchema)
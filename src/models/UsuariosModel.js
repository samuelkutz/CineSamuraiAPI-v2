import mongoose from "mongoose"

const UsuariosModel = mongooose.model("UsuariosModel", {
    nome_usuario: String,
    sobrenome: String,
    email_cadastro: String,
    cpf: String,
    senha_cadastro: String,
    telefone: String
})

/*
class UsuariosModel{
     * 
     * @param {string} nome_usuario 
     * @param {string} sobrenome 
     * @param {string} email_cadastro 
     * @param {string} cpf 
     * @param {string} senha_cadastro 
     * @param {string} telefone 

    constructor(nome_usuario, sobrenome, email_cadastro, cpf, senha_cadastro, telefone){
        nome_usuario = nome_usuario
        sobrenome = sobrenome
        email_cadastro = email_cadastro
        cpf = cpf
        senha_cadastro = senha_cadastro
        telefone = telefone
    }
}

export default UsuariosModel
*/
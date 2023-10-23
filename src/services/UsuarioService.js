import { Usuario } from "../models/Usuario.js";

class UsuarioService {
    static create(body) {
        return Usuario.create(body)
    }

    static findAll() {
        return Usuario.find()
    }

    static findById(id) {
        return Usuario.findById(id)
    }

    static update(
        id,
        nome,
        email,
        cpf,
        senha,
        telefone
    ) {
        return Usuario.findOneAndUpdate(
            { _id: id }, //inside MongoDB, the id is called _id
            { nome, email, cpf, senha, telefone }
        )
    }

    static delete(id) {
        return Usuario.findByIdAndDelete(id)
    }
}

export default UsuarioService
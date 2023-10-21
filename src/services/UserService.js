import { User } from "../models/User.js";

class UserService {
    static create(body) {
        return User.create(body)
    }

    static findAll() {
        return User.find()
    }

    static findById(id) {
        return User.findById(id)
    }

    static update(
        id,
        nome,
        email,
        cpf,
        senha,
        telefone
    ) {
        return User.findOneAndUpdate(
            { _id: id }, //inside MongoDB, the id is called _id
            { nome, email, cpf, senha, telefone }
        )
    }

    static delete(id) {
        return User.findByIdAndDelete(id)
    }
}

export default UserService
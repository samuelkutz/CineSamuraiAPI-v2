import { create } from "../services/user.service.js"

class UserController{
    static async create(req, res) {
        const { nome, email, cpf, senha, telefone } = req.body

        if (!nome || !email || !cpf || !senha || !telefone) {
            res.status(400).send({ message : "Preencha todos os campos"})
        }

        const user = await create(req.body) //connecting to MongoDB and creating an user (generates its _id)

        if (!user) {
            res.status(400).send({
                message: "Erro ao criar usuário"
            })
        }

        res.status(201).send({
            message: "Usuário criado com sucesso",
            user: {
                id : user._id,
                nome,
                email,
                cpf,
                senha,
                telefone
            }
        })
    }
}

export default UserController
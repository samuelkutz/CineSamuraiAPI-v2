import UserService from "../services/UserService.js"

class UserController {
    static async create(req, res) {
        const { nome, email, cpf, senha, telefone } = req.body

        if (!nome || !email || !cpf || !senha || !telefone) {
            return res.status(400).send({ message: "Preencha todos os campos" })
        }

        const user = await UserService.create(req.body) // connecting to MongoDB and creating an user (generates its _id)

        if (!user) {
            return res.status(400).send({
                message: "Erro ao criar usuário"
            })
        }

        res.status(201).send({
            message: "Usuário criado com sucesso",
            user: {
                id: user._id,
                nome,
                email,
                cpf,
                senha,
                telefone
            }
        })
    }

    static async findAll(req, res) {
        const users = await UserService.findAll()

        if (users.length === 0) {
            return res.status(400).send({ message: "Não há usuários registrados" })
        }

        res.status(200).send(users)
    }

    static async findById(req, res) {
        const user = req.user // user is added to req in the middlewares run before findByID 

        res.status(200).send(user)
    }

    static async update(req, res) {
        const { nome, email, cpf, senha, telefone } = req.body
        const id = req.id // id is added to req in the middlewares run before findByID 

        await UserService.update(
            id, 
            nome, 
            email, 
            cpf, 
            senha, 
            telefone
        )

        res.send({message: "Usuário atualizado com sucesso!"})
    }
}

export default UserController
import UserService from "../services/UserService.js"

class UserController {
    static async create(req, res) {
            try {
            const { nome, email, cpf, senha, telefone } = req.body

            if (!nome || !email || !cpf || !senha || !telefone) {
                return res.status(400).send({ message: "Preencha todos os campos" })
            }

            const user = await UserService.create(req.body) // connecting to MongoDB and creating an user (generates its _id)

            if (!user) {
                return res.status(400).send({ message: "Erro ao criar usuário" })
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
        } catch (err) {
            res.status(500).send( { message: err.message })
        }
    }

    static async findAll(req, res) {
        try {
            const users = await UserService.findAll()

            if (users.length === 0) {
                return res.status(400).send({ message: "Não há usuários registrados" })
            }

            res.status(200).send(users)
        } catch (err) {
            res.status(500).send({ message: err.message })
        }
    }

    static async findById(req, res) {
        try {
            const user = req.user // user is added to req in the middlewares run before findByID 

            res.status(200).send(user)
        } catch (err) {
            res.status(500).send({ message: err.message })
        }
    }

    static async update(req, res) {
        const { nome, email, cpf, senha, telefone } = req.body
        
        if (!nome && !email && !cpf && !senha && !telefone) {
            return res.status(400).send({ message: "Preencha pelo menos um dos campos para atualizar" })
        }
        
        const { id, user } = req // user will be used soon

        await UserService.update(
            id, 
            nome, 
            email, 
            cpf, 
            senha, 
            telefone
        )

        res.send({message: "Usuário atualizado com sucesso!"})

        try {
            const { nome, email, cpf, senha, telefone } = req.body
        
            if (!nome && !email && !cpf && !senha && !telefone) {
                return res.status(400).send({ message: "Preencha pelo menos um dos campos para atualizar" })
            }
            
            const { id, user } = req // user will be used soon
    
            await UserService.update(
                id, 
                nome, 
                email, 
                cpf, 
                senha, 
                telefone
            )
    
            res.send({message: "Usuário atualizado com sucesso!"})    
        } catch (err) {
            res.status(500).send({ message: err.message })
        }
    }
}

export default UserController
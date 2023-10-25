import UsuarioService from "../services/UsuarioService.js"

class UsuarioController {
    static async create(req, res) {
        try {
            const { nome, email, cpf, senha, telefone } = req.body
            console.log(req.body)
            if (!nome || !email || !cpf || !senha || !telefone) {
                return res.status(400).send({ message: "Preencha todos os campos" })
            }

            const user = await UsuarioService.create(req.body) // connecting to MongoDB and creating an user (generates its _id)

            if (!user) {
                return res.status(400).send({ message: "Erro ao criar usuário" })
            }

            res.status(201).send({
                message: "Usuário criado com sucesso",
                id_usuario: user._id
            })
        } catch (err) {
            console.log(err)
            res.status(500).send({ message: err.message })
        }
    }

    static async findAll(req, res) {
        try {
            const users = await UsuarioService.findAll()

            if (users.length === 0) {
                return res.status(400).send({ message: "Não há usuários registrados" })
            }

            res.status(200).send(users)
        } catch (err) {
            console.log(err)
            res.status(500).send({ message: err.message })
        }
    }

    static async findById(req, res) {
        try {
            const user = req.user // user is added to req in the middlewares run before findByID 

            res.status(200).send(user)
        } catch (err) {
            console.error(err)
            res.status(500).send({ message: err.message })
        }
    }

    static async update(req, res) {
        try {
            const { nome, email, cpf, senha, telefone } = req.body
        
            if (!nome && !email && !cpf && !senha && !telefone) {
                return res.status(400).send({ message: "Preencha pelo menos um dos campos para atualizar" })
            }
            
            const { id, user } = req // user will be used soon

            await UsuarioService.update(
                id, 
                nome, 
                email, 
                cpf, 
                senha, 
                telefone
            )
    
            res.send({ message: "Usuário atualizado com sucesso!" })    
        } catch (err) {
            res.status(500).send({ message: err.message })
        }
    }
    static async delete(req, res) {
        try {
            const id = req.id

            await UsuarioService.delete(id)

            res.status(200).send({ 
                message: "Usuário deletado do banco de dados", 
            })
        } catch (err) {
            console.error(err)
            res.status(500).send({ message: err.message })
        }
    }
}

export default UsuarioController
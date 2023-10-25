import SalaService from "../services/SalaService.js";

class SalaController {
    static async create(req, res) {
        try {
            const { nome, poltronas } = req.body

            if (!nome || !poltronas) {
                return res.status(400).send({ message: "Preencha todos os campos" })
            }

            const sala = await SalaService.create(req.body) 

            if (!sala) {
                return res.status(400).send({ message: "Erro ao criar sala" })
            }

            res.status(201).send({
                message: "Sala criada com sucesso",
                id_sala: sala._id
            })
        } catch(err) {
            res.status(500).send({ message: err.message})
        }
    }

    static async findAll(req, res) {
        try {
            const salas = await SalaService.findAll()

            if (salas.length === 0) {
                return res.status(400).send({ message: "Não há salas registradas" })
            }

            res.status(200).send(salas)
        } catch (err) {
            console.log(err)
            res.status(500).send({ message: err.message })
        }
    }

    static async findById(req, res) {
        try {
            const sala = req.sala // sala is added to req in the middlewares run before findByID 

            res.status(200).send(sala)
        } catch (err) {
            console.error(err)
            res.status(500).send({ message: err.message })
        }
    }

    static async update(req, res) {
        try {
            const { nome, poltronas } = req.body
        
            if (!nome && !poltronas) {
                return res.status(400).send({ message: "Preencha pelo menos um dos campos para atualizar" })
            }
            
            const { id, sala } = req // sala will be used soon

            await SalaService.update(
                id, 
                nome, 
                poltronas
            )
    
            res.send({ message: "Sala atualizada com sucesso!" })    
        } catch (err) {
            res.status(500).send({ message: err.message })
        }
    }
    static async delete(req, res) {
        try {
            const id = req.id

            await SalaService.delete(id)

            res.status(200).send({ 
                message: "Sala deletada do banco de dados", 
            })
        } catch (err) {
            console.error(err)
            res.status(500).send({ message: err.message })
        }
    }
}

export default SalaController


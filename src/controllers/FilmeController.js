import FilmeService from "../services/FilmeService.js"

class FilmeController{
    static async create(req, res) {
        try {
            const {nome, sinopse, url_imagem_capa, linguagem_original, classificacao_indicativa, duracao} = req.body

            if (!nome || !sinopse || !url_imagem_capa || !linguagem_original || !classificacao_indicativa || !duracao) {
                return res.status(400).send({ message: "Preencha todos os campos" })
            }

            const filme = await FilmeService.create(req.body)

            if (!filme) {
                res.status(400).send({ message: "Erro adicionar filme" })
            }

            res.status(201).send({
                message: "Filme adicionado com sucesso",
                id_filme: filme._id
            })
        } catch (err) {
            console.log(err)
            res.status(500).send({ message: err.message })
        }
    }

    static async findAll(req, res) {
        try {
            const filmes = await FilmeService.findAll()

            if (users.length === 0) {
                return res.status(400).send({ message: "Não há filmes registrados" })
            }

            res.status(200).send(filmes)
        } catch (err) {
            console.log(err)
            res.status(500).send({ message: err.message })
        }
    }

    static async findById(req, res) {
        try {
            const filme = req.filme //filme is added to req in the middlewares run before findByID 

            res.status(200).send(filme)
        } catch (err) {
            console.error(err)
            res.status(500).send({ message: err.message })
        }
    }

    static async update(req, res) {
        try {
            const {nome, sinopse, url_imagem_capa, linguagem_original, classificacao_indicativa, duracao} = req.body

            if (!nome && !sinopse && !url_imagem_capa && !linguagem_original && !classificacao_indicativa && !duracao) {
                return res.status(400).send({ message: "Preencha pelo menos um dos campos para atualizar" })
            }
            
            const { id, filme } = req // filme will be used soon
    
            await FilmeService.update({
                    id,
                    nome,
                    sinopse,
                    url_imagem_capa,
                    linguagem_original,
                    classificacao_indicativa,
                    duracao
                })
    
            res.send({message: "Filme atualizado com sucesso!"})    
        } catch (err) {
            res.status(500).send({ message: err.message })
        }
    }
    static async delete(req, res) {
        try {
            const id = req.id

            await FilmeService.delete(id)

            res.status(200).send({ 
                message: "Filme deletado do banco de dados", 
            })
        } catch (err) {
            console.error(err)
            res.status(500).send({ message: err.message })
        }
    }
}

export default FilmeController
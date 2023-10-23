import Filme from "../models/Filme.js";

class FilmeService {
    static create(body) {
        return Filme.create(body)
    }

    static findAll() {
        return Filme.find()
    }

    static findById(id) {
        return Filme.findById(id)
    }

    static update(
        id,
        nome,
        sinopse,
        url_imagem_capa,
        linguagem_original,
        classificacao_indicativa,
        duracao
    ) {
        return Filme.findOneAndUpdate(
            { _id: id }, //inside MongoDB, the id is called _id
            { nome, sinopse, url_imagem_capa, linguagem_original, classificacao_indicativa, duracao }
        )
    }

    static delete(id) {
        return Filme.findByIdAndDelete(id)
    }
}

export default FilmeService
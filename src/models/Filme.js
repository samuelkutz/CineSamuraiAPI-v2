import mongoose from "mongoose";

const FilmeSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    }, 
    sinopse: {
        type: String,
        require: true
    },
    url_imagem_capa: {
        type: String,
        require: true
    },
    linguagem_original: {
        type: String,
        require: true
    },
    classificacao_indicativa: {
        type: String,
        require: true
    },
    duracao: {
        type: String,
        require: true
    }
}, {
    versionKey: false
})

const Filme = mongoose.model("Filme", FilmeSchema)

export default Filme
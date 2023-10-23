import mongoose from "mongoose";

const PoltronaSchema = new mongoose.Schema({
    numero: {
        type: Number,
        required: true
    },
    id_sala: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Salas",     
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    disponivel: {
        type: boolean,
        default: true ,
        required: true
    }
}, {
    versionKey: false
}) 

const SalaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    poltronas: [PoltronaSchema]
})

const Sala = mongoose.model("Sala", SalaSchema)

expor
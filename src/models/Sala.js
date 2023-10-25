import mongoose from "mongoose";

/////////////////////////
//MUDAR PARA COORDENADA//
/////////////////////////

const PoltronaSchema = new mongoose.Schema({
    coordenada: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    disponivel: {
        type: Boolean,
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
}, {
    versionKey: false
})

const Sala = mongoose.model("Sala", SalaSchema)

export default Sala
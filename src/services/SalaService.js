import Sala from "../models/Sala.js";

class SalaService{
    static create(body) {
        return Sala.create(body)
    }

    static findAll() {
        return Sala.find()
    }

    static findById(id) {
        return Sala.findById(id)
    }

    static update(
        id, 
        nome, 
        poltronas
    ) {
        return Sala.findOneAndUpdate(
            { _id: id },
            { nome, poltronas }
        )
    }

    static delete(id) {
        return Sala.findByIdAndDelete(id)
    }

    static findPoltrona(nome_sala, coordenada) {
        const sala = Sala.findById(nome_sala)

        const poltronas = sala.poltronas
        
        for (let i=0; i < sala.poltronas; i++) {s
            if (poltronas[i].coordenada == coordenada) {
                return poltronas[i]
            }
        }
    }
}

export default SalaService
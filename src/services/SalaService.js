import Sala from "../models/Sala";

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
}

export default SalaService
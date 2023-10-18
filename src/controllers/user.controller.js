class UserController{
    static create(req, res) {
        const { nome, email, cpf, senha, telefone } = req.body

        if (!nome || !email || !cpf || !senha || !telefone) {
            res.send({ message : "Preencha todos os campos"})
        }

        res.send("xD")
    }
}

export default UserController
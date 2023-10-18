class UserController{
    static create(req, res) {
        const { nome, email, cpf, senha, telefone } = req.body

        if (!nome || !email || !cpf || !senha || !telefone) {
            res.status(400).send({ message : "Preencha todos os campos"})
        }

        res.status(201).send({
            message: "Usuário criado com sucesso",
            user: {
                nome,
                email,
                cpf,
                senha,
                telefone
            }
        })
    }
}

export default UserController
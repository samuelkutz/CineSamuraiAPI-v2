import bcrypt from "bcrypt"
import AuthService from "../services/AuthService.js"

class AuthController {
    static async login(req, res) {
        try {
            const { email, senha } = req.body

            const user = await AuthService.findByEmail(email) // findByEmail returns user object with the password included

            if (!user) {
                return res.status(404).send({ message: "Usuário ou senha não encontrados" })
            }

            const isValidSenha = await bcrypt.compare(senha, user.senha)

            if (!isValidSenha) {
                return res.status(404).send({ message: "Usuário ou senha não encontrados" })
            }

            const token = AuthService.generateToken(user._id) //synchronous

            res.status(200).send({ token: token }) 
        } catch (err) {
            console.log(err)
            res.status(500).send({ message: err })
        }
    }
}

export default AuthController

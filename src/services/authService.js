import Usuario from "../models/Usuario.js"
import jwt from "jsonwebtoken"

class AuthService{
    static findByEmail(email){
        return Usuario.findOne( { email: email } ).select("+senha") // user DOES NOT have the password naturally, thats why we need to call the select method
    }

    static generateToken(id) {
        jwt.sign({ id: id }, procces.env.SECRET_JWT, { expiresIn: 86400 }) // token expires in 24h
    }
}

export default AuthService 
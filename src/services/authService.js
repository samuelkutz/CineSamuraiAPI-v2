import { User } from "../models/User.js"
import jwt from "jsonwebtoken"

class AuthService{
    static findByEmail(email){
        return User.findOne( { email: email } ).select("+senha") // user DOES NOT have the password naturally, thats why we need to modify the select method
    }

    static generateToken(id) {
        jwt.sign({ id: id }, procces.env.SECRET_JWT, { expiresIn: 86400 }) // token expira em 24h
    }
}

export default AuthService
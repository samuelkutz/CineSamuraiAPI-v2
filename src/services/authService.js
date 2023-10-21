import { User } from "../models/User.js"

class AuthService{
    static findByEmail(email){
        return User.findOne( { email: email } ).select("+senha") // user DOES NOT have the password naturally, thats why we need to modify the select method
    }
}

export default AuthService
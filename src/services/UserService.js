import { User } from "../models/User.js";

class UserService {
    static create(body) { 
        return User.create(body)
    }

    static findAll() {
        return User.find()
    }

    static findById(id) {
        return User.findById(id)
    }

}

export default UserService
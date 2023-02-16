const User = require('../schemas/User')

class UserService {
    static async createUser({ name, email, password }) {
        const { id } = await User.create({
            name,
            email,
            password
        })

        return { id }
    }
}

module.exports = UserService
const UserService = require('../services/user-service')

class UserController {
    static async create(req, res) {
        try {
            const { name, email, password } = req.body
    
            if(!password) {
                throw { status: 400, message: 'Senha inválida'}
            }
    
            const { id } = await UserService.createUser({ name, email, password })
            //{ id: 1 }
            return res.status(200).json({ id })
        } catch (error) {
            return res.status(error.status || 500).json(error.message || 'Server Error')
        }
    }
}

module.exports = UserController
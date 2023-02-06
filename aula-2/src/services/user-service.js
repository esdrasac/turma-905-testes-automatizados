const db = require('../database')



class UserService {
    static signUp({ nome, cpf, email }) {
        return db.create({
            nome,
            cpf,
            email
        })
    }

    static userExists(cpf) {
        return db.findByCPF(cpf)
    }
}

module.exports = UserService
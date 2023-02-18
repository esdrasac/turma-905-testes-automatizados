const jwt = require('jsonwebtoken')

class SessionService {
    static generateToken({ email }) {
        return jwt.sign({ email }, 'abc', {
            expiresIn: '30s'
        })
    }
}

module.exports = SessionService
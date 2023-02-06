const prompt = require('prompt')
const UserService = require('./user-service')

class MenuService {
    static async signUp() {
        const { nome, cpf, email } = await prompt.get(['nome', 'cpf', 'email'])
        const userExists = UserService.userExists(cpf)

        if(userExists) {
            console.log('Usuário já cadastrado...')
            return prompt.get(['Pressione uma tecla para continuar: '])
        }

        UserService.signUp({
            nome,
            cpf,
            email
        })

        console.clear()
        console.log('* Usuário cadastrado com sucesso')
        return prompt.get(['Pressione uma tecla para continuar: '])
    }
}

module.exports = MenuService
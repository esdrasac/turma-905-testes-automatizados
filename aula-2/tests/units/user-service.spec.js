const { cpf: cpfValidator } = require('cpf-cnpj-validator')
const { faker } = require('@faker-js/faker')

const UserService = require('../../src/services/user-service')
const db = require('../../src/database')

const dbSucessMock = {
    findByCPF: (cpf) => {
        return true
    },
    create: ({ nome, cpf, email }) => {
        return { id: 1 }
    }
}

const dbFailedMock = {
    findByCPF: (cpf) => {
        return false
    }
}

const userMock = {
    nome: faker.name.firstName(),
    cpf: cpfValidator.generate(),
    email: faker.internet.email()
}

describe('[User Service] userExists', () => {
    it('Should returns true if user exists (Original Implementation)', () => {
        const userExits = UserService.userExists('123456')
        expect(userExits).toBe(true)
    })
    
    it('Should returns true if user exists', () => {
        jest.spyOn(db, 'findByCPF').mockImplementationOnce(dbSucessMock.findByCPF)

        const userExits = UserService.userExists('12345678910')
        expect(userExits).toBe(true)
    })

    it('Should returns false if user not exists', () => {
        jest.spyOn(db, 'findByCPF').mockImplementationOnce(dbFailedMock.findByCPF)

        const userExits = UserService.userExists('12345678911')
        expect(userExits).toBe(false)
    })

    it('Should returns false if no cpf is provided', () => {
        jest.spyOn(db, 'findByCPF').mockImplementationOnce(dbFailedMock.findByCPF)

        const userExits = UserService.userExists()
        
        expect(userExits).toBe(false)
    })
})


describe('[User Service] signUp', () => {
    it('Should return an id for a new created user', () => {
        jest.spyOn(db, 'create').mockImplementationOnce(dbSucessMock.create)

        const createdUser = UserService.signUp(userMock)

        expect(createdUser).toMatchObject({ id: 1 })
    })
})
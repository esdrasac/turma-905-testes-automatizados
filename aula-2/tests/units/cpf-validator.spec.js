const CpfValidator = require('../../src/utils/cpf-validator')

describe('CPF Validator', () => {
    it('Should return true if cpf masked is valid', () => {
        const isValid = CpfValidator.isValid('766.720.020-30')

        expect(isValid).toBe(true)
    })

    it('Should return true if cpf is valid', () => {
        const isValid = CpfValidator.isValid('76672002030')
        expect(isValid).toBe(true)
    })

    it('Should return true if cpf is not valid', () => {
        const isValid = CpfValidator.isValid('76672002031')
        expect(isValid).toBe(false)
    })

    it('Should return true if no cpf is provided', () => {
        const isValid = CpfValidator.isValid()
        expect(isValid).toBe(false)
    })
})
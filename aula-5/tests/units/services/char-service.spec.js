require('dotenv').config()
const axios = require('axios')
const CharacterService = require('../../../src/services/char-service')

const characterMock = require('../../mocks/rick-and-morty-character-api.json')
const rickSanchesMock = require('../../mocks/rick-sanches-mock.json')

const charApi = async () => {
    return {
        data: characterMock
    }
}

const charApiNotFoundException = async () => {
    throw {
        response: {
            status: 404,
            data: {
                error: 'There is nothing here'
              }
        }
    }
}

describe('Character Service', () => {
    it('Deve retornar uma lista de personagens', async () => {
        jest.spyOn(axios, 'get').mockImplementationOnce(charApi)
        
        const page = 1
        const personagens = await CharacterService.get(page)
        
        expect(personagens[0]).toHaveProperty('id')
        expect(personagens[0]).toMatchObject(rickSanchesMock)
    })

    it('Deve retornar status 404 se a pagina não existir', async () => {
        jest.spyOn(axios, 'get').mockImplementationOnce(charApiNotFoundException)
        
        const page = 43
        try {
            await CharacterService.get(page)
        } catch (error) {
            expect(error.response.status).toBe(404)
            expect(error.response.data).toMatchObject({ error: 'There is nothing here' })
        }
    })
})
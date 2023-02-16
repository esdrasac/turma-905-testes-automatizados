const obj = {
    name: 'Esdras',
    address: {
        street: '7',
        number: 125,
        neighborhood: 'Tropical'
    },
    falar: () => {
        console.log('Sou professor na Ada')

        return {
            job: () => {
                console.log('Professor')

                return {
                    enterprise: () => {
                        console.log('Ada')
                    }
                }
            }
        }
    }
}

// obj.falar().job().enterprise()


const fn = (param) => {
    try {
        console.log('Try')

        if(!param.name) {
            console.log('nome não informado')
            throw { status: 400, message: 'nome não informado' }
        }

        console.log('Fim da função')
    } catch (err) {
        console.log('Catch')
    }
}

fn({})
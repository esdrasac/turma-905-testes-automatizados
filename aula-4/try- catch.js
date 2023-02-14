function fn(pessoa) {
    try {
        if(!pessoa) {
            throw 'Parametros inválidos'
        }

        console.log(pessoa)
    } catch (error) {
       console.log(error)
    }
}

fn()
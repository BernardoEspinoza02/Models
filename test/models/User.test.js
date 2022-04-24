const User = require ('./../../app/models/User')

describe("Unit tests for User class", () => {

    test('Create an User object', () => {
        // Aqui invocas el codigo que vas a usar en tu app
        const user = new User(1, "Carlogilmar", "Carlo", "Bio", "dateCreated", "lastUpdated")

        //Aqui validas los resultados de ese codigo 
        // Este es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("Carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    })
}) 


/*
 describe("Prueba de jest", () => {
    test ("prueba 1", () => {
        expect(10).toBe(10)
    })

})
*/
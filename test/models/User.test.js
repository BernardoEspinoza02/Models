const User = require ('./../../app/models/User')

describe("Unit tests for User class", () => {

    test('Create an User object', () => {
        // Aqui invocas el codigo que vas a usar en tu app
        const user = new User(1, "Carlogilmar", "Carlo", "Bio")

        //Aqui validas los resultados de ese codigo 
        // Este es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("Carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeU//Verifica que el valor no sea undefine
        expect(user.dateCreated).not.toBeUndefined ()
        expect(user.lastUpdated).not.toBeUndefined ()
        });
}) 


/*
 describe("Prueba de jest", () => {
    test ("prueba 1", () => {
        expect(10).toBe(10)
    })

})
*/
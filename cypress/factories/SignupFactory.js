var faker = require('faker')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: '40104251808',
            email: faker.internet.email(firstName),
            whatsapp: '11974584058',
            address: {
                postalcode: '09175400',
                street: 'Rua Ariranha',
                number: '47',
                details: 'ap 7',
                district: 'Vila Helena',
                city_state: 'Santo André/SP'
            },
            delivery_method: 'Moto',
            cnh: 'download (32).jpg' 
        }   

        return data
        
    }

}
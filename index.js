const customExpress = require('./configurations/customExpress')
const connection = require('./configurations/dbConnection')
const Tables = require('./configurations/tables')

connection.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('DB conectado')
        Tables.init(connection);
        const app = customExpress()
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})


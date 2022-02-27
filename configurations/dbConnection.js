const mySql = require('mySql2')

const connection = mySql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'petshop_user',
    password: 'A8jwY742Bbt@',
    database: 'schedule_petshop'
})

module.exports = connection
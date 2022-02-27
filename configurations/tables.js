class Tables {
    init(connection) {
        this.connection = connection
        this.createTreatments()
    }

    createTreatments() {
        const sql = 'CREATE TABLE IF NOT EXISTS Treatments (id int NOT NULL AUTO_INCREMENT, client varchar(50), pet varchar(20), service varchar(20) NOT NULL, status varchar(20) NOT NULL, observations text, PRIMARY KEY(id))'

        this.connection.query(sql, (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Tabela criada com sucesso!')
            }
        })
    }
}

module.exports = new Tables
const res = require("express/lib/response")
const { connection } = require("../configurations/tables")


class Treatment{
    add(treatment, res){
        const query = 'INSERT INTO treatments SET ?'
        connection.query(query, treatment, (error, result) => {
            if(error){
                res.status(400).json(error)
            } else {
                res.status(201).json(result)
            }
        })
    }
}

module.exports = new Treatment
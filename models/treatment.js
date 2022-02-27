const res = require("express/lib/response")
const req = require("express/lib/request")
const { connection } = require("../configurations/tables")


class Treatment{

    getAll(res){
        const query = 'SELECT * FROM treatments'
        connection.query(query, (error, result) => {
            if(error){
                res.status(400).json(error)
            } else {
                res.status(200).json(result)
            }
        })
    }


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

    update(id, treatment, res){
        const query = `UPDATE treatments SET ? WHERE id=?`
        connection.query(query, [treatment,id], (error, result) => {
            if(error){
                res.status(400).json(error)
            } else {
                res.status(201).json(result)
            }
        })
    }

    delete(id, treatment, res){
        const query = `DELETE FROM treatments WHERE ID=${id}`
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
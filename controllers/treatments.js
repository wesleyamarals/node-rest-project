const Treatment = require('../models/treatment')

module.exports = app => {

    app.get('/atendimentos', (req, res) => Treatment.getAll(res))

    app.post('/atendimentos', (req, res) => {
        const treatment = req.body
        Treatment.add(treatment, res)
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = req.params.id
        const treatment = req.body
        Treatment.update(id, treatment, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = req.params.id
        const treatment = req.body
        Treatment.delete(id, treatment, res)
    })
}


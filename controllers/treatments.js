const Treatment = require('../models/treatment')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Rota de atendimentos - GET'))

    app.post('/atendimentos', (req, res) => {
        const treatment = req.body
        Treatment.add(treatment, res)
    })
}
const User = require('../models').User

const create = (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
        .then(user => {
            res.status(200).json(user)
        }).catch(err => {
            res.status(500).json(err)
        })
}

const findAll = (req, res) => {
    User.findAll()
        .then(users => {
            res.status(200).json(users)
        }).catch(err => {
            res.status(500).json(err)
        })
}

module.exports = {
    create,
    findAll
}
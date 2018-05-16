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

const findUser = (req, res) => {
    User.findOne( { where: { id: req.params.id } })
        .then(user => {
            res.status(200).json(user)
        }).catch(err => {
            res.status(500).json(err)
        })
}

const update = (req, res) => {
    User.update({
        username: req.body.username,
        password: req.body.password
    }, { where: { id: req.params.id } })
        .then(user => {
            res.status(200).json(user)
        }).catch(err => {
            res.status(500).json(err)
        })
}

 const remove = (req, res) => {
    User.destroy({
        where: { id: req.params.id }
    })
    .then(user => {
        res.status(200).json('succes delet one data')
    }).catch(err => {
        res.json(err)
    })
 }


module.exports = {
    create,
    findAll,
    findUser,
    update,
    remove
}
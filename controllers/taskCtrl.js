const Task = require('../models').Task
const User = require('../models').User

const create = (req, res) => {
    Task.create({
        UserId: req.body.UserId,
        name: req.body.name,
        priority: req.body.priority,
        location: req.body.location,
        time_start: req.body.time_start
    }).then(task => {
        res.status(200).json(task)
    }).catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
}

const findAll = (req, res) => {
    Task.findAll({
        include: [{
            model: User,
            where: { id: 1}
        }]
    })
        .then(tasks => {
            res.status(200).json(tasks)
        }).catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
}

const findTask = (req, res) => {
    Task.findOne( {where: { id: req.params.id } })
        .then(task => {
            res.status(200).json(task)
        }).catch(err => {
            res.status(500).json(err)
        })
}


module.exports = {
    create,
    findAll,
    findTask
}
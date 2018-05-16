const Task = require('../models').Task


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
    Task.findAll()
        .then(tasks => {
            console.log(tasks)
            res.status(200).json(tasks)
        }).catch(err => {
            res.status(500).json(err)
        })
}
module.exports = {
    create,
    findAll
}
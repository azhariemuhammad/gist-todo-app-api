const express = require('express')
const router = express.Router()

const { taskCtrl } = require('../controllers')

router.post('/tasks', taskCtrl.create)

router.get('/tasks', taskCtrl.findAll)

module.exports = router
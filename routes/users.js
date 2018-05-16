const express = require('express')
const router = express.Router()

const { userCtrl } = require('../controllers')

router.get('/users', userCtrl.findAll)

router.post('/users', userCtrl.create)

router.get('/users/:id', userCtrl.findUser)

router.put('/users/:id', userCtrl.update)

router.delete('/users/:id', userCtrl.remove)

module.exports = router

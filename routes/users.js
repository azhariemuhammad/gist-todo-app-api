const express = require('express')
const router = express.Router()

const { userCtrl } = require('../controllers')
// console.log(userCtrl.findAll)
router.get('/users', userCtrl.findAll)

router.post('/users', userCtrl.create)
module.exports = router

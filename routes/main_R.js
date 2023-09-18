const express = require('express')
const router = express.Router()

const services = require('../services/render')

router.get('/', services.index)

module.exports = router
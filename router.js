const express = require('express')
const router = express.Router()
const logicController = require('./controllers/logicController')

router.get('/', logicController.home);

router.post('/', logicController.showDrug)

module.exports = router 

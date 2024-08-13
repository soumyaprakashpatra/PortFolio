const express = require('express')
const { sendEmailContoller } = require('../conrollers/portfolioConroller')

// router object
const router = express.Router()

//routes
router.post('/sendEmail',sendEmailContoller)

//export
module.exports=router
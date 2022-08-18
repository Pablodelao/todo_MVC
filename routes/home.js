// Handles initial get request for the homepage
// handles Post method request for adding a new task

const express = require('express')
const router = express.Router()

const homeController = require('../controllers/home')


router.get('/', homeController.getIndex )
router.post('/', homeController.createTask)

//add specific routes for soecific tasks


module.exports = router
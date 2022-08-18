// it will handle editing and deleteing items and rendering the page iteself
const express = require('express')
const router = express.Router()

const editController = require('../controllers/edit')


router.get('/:id', editController.getEdit)
router.get('/remove/:id', editController.deleteTask)
router.post('/:id', editController.updateTask)

//add specific routes for soecific tasks


module.exports = router
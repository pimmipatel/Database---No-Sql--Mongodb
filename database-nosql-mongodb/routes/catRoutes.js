
var express = require('express')
var router = express.Router()
var {disp,ins,delData,editData} = require('../controllers/catController')
router.get('/',disp)
router.post('/add',ins)
router.get('/del/:id',delData)
router.get('/edit/:id',editData)

module.exports = router

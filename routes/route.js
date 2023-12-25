const router = require('express').Router();
const {signup,getbill} = require('../controller/appController.js')

/**HTTP reques */

router.post('/user/signup',signup)
router.post('/product/getbill',getbill)

module.exports = router


const express = require('express');
const router = express.Router();
const  { Userlogin, userSignup }   = require('../controllers/authController')

router.post('/signup', userSignup);
router.post('/login', Userlogin);


module.exports = router;


const express = require('express');
const {registerAdmin, loginAdmin} = require('../controllers/adminControllers');
const router = express.Router();

router.get('/', (req, res) => res.send('This is the admin route'));
router.post('/register', registerAdmin);
router.post('/login', loginAdmin);

module.exports = router;
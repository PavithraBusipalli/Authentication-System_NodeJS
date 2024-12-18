const express = require('express');
const router = express.Router();
const { userLogin } = require('../controllers/login');

router.post('/sigin', userLogin);

module.exports = { 
    userLoginRouter: router,
}
const express = require('express');
const { userRegistration } = require('../controllers/register');
const router = express.Router();


router.post('/signup', userRegistration);

module.exports = {
    userRouter: router,
}
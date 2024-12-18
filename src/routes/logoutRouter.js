const express = require('express');
const router = express.Router();
const { userLogout } = require('../controllers/logout');

router.post('/logout', userLogout);

module.exports = { 
    userLogoutRouter: router,
}
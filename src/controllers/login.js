const { User } = require('../models/user');
const { signInValidator } = require('../utils/validation');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const findUser = await User.findOne({email: email});
        if(!findUser) {
            return res.json({
                message: 'Invalid Credentials'
            })
        }
        const isPswd = await bcrypt.compare(password, findUser.password);
        if(isPswd) {
            const token = await jwt.sign({_id: findUser._id, }, "MyApp@2024", { expiresIn: "1d" });
            res.cookie('token', token);
            return res.send('Login Successful!');
        } else {
            throw new Error ("Invalid Credentials!")
        }
    } catch(err) {
        res.status(400).send("ERROR: " + err);
    }
};

module.exports = {
    userLogin
}
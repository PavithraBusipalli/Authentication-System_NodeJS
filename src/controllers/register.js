const { User } = require('../models/user');
const { signUpValidator } = require('../utils/validation');
const  bcrypt  = require('bcrypt');

const userRegistration = async (req, res) => {
    try {
        signUpValidator(req);
        const { firstName, lastName, email, password } = req.body;
        // Check for existing user in DB
        const userExists = await User.findOne({email});
        if(userExists) {
            return res.status(400).json({
                message: "User already Exists!"
            })
        }
        // hash user pswd
        const hashPswd = await bcrypt.hash(password, 10);

        const createUser = new User({
            firstName,
            lastName,
            email,
            password: hashPswd,
        })
        if(createUser) {
            await createUser.save();
            res.json({msg: "User created successfully!!"});
        }
    } catch(err) {
        res.status(400).send("ERROR: " + err.message);
    } 
};


module.exports = { userRegistration };
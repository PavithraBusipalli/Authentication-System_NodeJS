const validator = require('validator');

const signUpValidator = (req) => {
    const { firstName, lastName, email, password } = req.body;
    if(!firstName || !lastName) {
        throw new Error("Name should be required!");
    }
    else if(!email || !validator.isEmail(email)) {
        throw new Error("Enter valid Email!!");
    }
    else if(!validator.isStrongPassword(password)) {
        throw new Error("Kindly enter strong Password!!");
    } 
};

const signInValidator = (req) => {
    const { email } = req.body;
    if(!validator.isEmail(email)) {
        throw new Error("Email should be required!");
    }
}

module.exports = {
    signUpValidator,
    signInValidator
}
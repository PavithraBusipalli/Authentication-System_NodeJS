const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    skills: {
        type: [String],
    },
    age: {
        type: Number,
        min: 18,
    }
},
{
    timestamps: true,
}
);


const User = mongoose.model("User", userSchema);

module.exports = { User };
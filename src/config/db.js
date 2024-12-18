const mongoose = require('mongoose');

const dbConnection = async () => {
    await mongoose.connect('mongodb+srv://busipallipavithra:busipallipavithra@cluster0.hxdfq.mongodb.net/myDatabase');
};

module.exports = { dbConnection };

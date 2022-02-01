const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        default: true
    },
    enail: {
        type: String,
        default: true
    },
    password: {
        type: String,
        default: true
    },
    date: {
        type: Date,
        default: Date.Now
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
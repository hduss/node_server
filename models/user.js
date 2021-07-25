const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true }
});

// Add uniqueValidator plugin in userSchema
// userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)
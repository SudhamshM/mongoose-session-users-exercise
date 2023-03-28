const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        firstName: {type: String, required: [true, 'Cannot be empty.']},
        lastName: {type: String, required: [true, 'Cannot be empty.']},
        email: {type: String, required: [true, 'Cannot be empty.'], unique: true},
        password: {type: String, required: [true, 'Cannot be empty.']},

    }
)

userSchema.methods.compare = function(loginPassword)
{
    return this.password === loginPassword;
}

module.exports = mongoose.model('User', userSchema);
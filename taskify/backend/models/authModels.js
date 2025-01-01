const mongoose = require('mongoose');


const AuthSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
            min: 2,
            max: 16
        }
    }
)

const Auth = mongoose.model('Auth', AuthSchema);
module.exports = Auth;
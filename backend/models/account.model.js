const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    fullName:String, 
    username: String, 
    email: String, 
    password: String,
    token: String,  
    address: String,
    phone: String,
    deleted: {
        type: Boolean,
        default: false
    },
    deletedAt: Date,
    },
    { timestamps: true }
)

const Account = mongoose.model("Account", accountSchema, "accounts");

module.exports = Account;
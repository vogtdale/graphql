const mongoose = require("mongoose")
const {Schema} = mongoose

const usersSchema = new Schema({
    name: {type: String},
    email: {type: String}
})

const Users = mongoose.model('Users', usersSchema)

module.exports = { Users }


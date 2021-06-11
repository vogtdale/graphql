const mongoose = require("mongoose")

const db = mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

console.log("Db Connected");

module.exports = db
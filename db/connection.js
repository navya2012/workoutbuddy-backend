
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGOOSE_CONNECTION)
.then(() => {
    console.log(" mongoDB connection is established")
})
.catch((err) => {
    console.log(`db error : ${err.message}`)
})
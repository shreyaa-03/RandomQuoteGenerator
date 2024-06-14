const mongoose = require('mongoose')

const dbConnect = async() => {
    const connect = await mongoose.connect(process.env.DB_URL)
    try {
        if (connect) {
            console.log("Database connected ", connect.connection.name, connect.connection.host)
        }
    } catch (error) {
        connect.log("Database connection failed ", error)
    }
}
module.exports= dbConnect
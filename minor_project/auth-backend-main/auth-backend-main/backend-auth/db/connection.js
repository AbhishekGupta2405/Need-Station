const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/authentication";

const connectToMongo = () => {
    mongoose.connect(mongoURI);
    console.log("Connected to mongoDB succesfully");
}

module.exports = connectToMongo;
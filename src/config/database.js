const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Jaswanth270602:Jassu%402706@devtinder.1ppby.mongodb.net/devTinderDB');
}

module.exports = connectDB;

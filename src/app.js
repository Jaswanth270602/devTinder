const express = require('express');
const { adminAuth, userAuth } = require('./middlewares/auth');
const connectDB = require('./config/database');
const User = require('./models/user');

// Middleware for admin authentication
const app = express();
const PORT = 3000;


app.post('/signup', async (req, res) => {
    const user = new User({
        firstName : "Aaron",
        lastName : "Finch",
        emailId : "finch@gmail.com",
        password : "finch@123",
        age : 32,
        gender : "Male"
    });
    try {
        await user.save();
        res.send('User registered successfully');
    } catch(err) {
        res.status(400).send("Something went wrong with saving in database");
    }
})

connectDB().then(()=>{
    try{
        console.log('Database connected successfully');
        app.listen(PORT, () => {
            console.log('server listening on port ' + PORT);
        })
    } catch(err) {
        console.error('Database connection failed');
    }
})

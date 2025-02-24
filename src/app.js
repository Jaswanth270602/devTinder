const express = require('express');
const { adminAuth, userAuth } = require('./middlewares/auth');
const connectDB = require('./config/database');
const User = require('./models/user');

// Middleware for admin authentication
const app = express();
const PORT = 3000;
app.use(express.json())

app.get('/user', async (req, res) => {
    const email = req.body.email;
    try {
        const user = await User.findOne({ emailId : email});
        if(user.length === 0) {
            res.status(404).send("User not found");
        }
        res.status(200).send(user);
    } catch( err ) {
        res.status(400).send("something went wrong");
    } 
})

app.get("/feed", async(req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        res.status(400).send("something went wrong");
    }
})
app.post('/signup', async (req, res) => {

    const user = new User(req.body);
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

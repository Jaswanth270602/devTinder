const express = require('express');
const { adminAuth, userAuth } = require('./middlewares/auth');

// Middleware for admin authentication
const app = express();
const PORT = 3000;

app.use('/admin', adminAuth );

app.get('/admin/getAllData', (req, res) => {
    res.send("Data sent successfully");
})

app.get('/admin/deleteUser', (req, res) => {
    res.send("User deleted successfully");
})

app.get('/user/login', (req, res) => {
    res.send("User logged in successfully");
})

app.get('/user/getData',userAuth, (req, res) => {
    throw new Error("User not logged in");
    res.send("User data sent successfully");
})

app.use('/', (err, req, res, next) => {
    if(err) {
        res.status(500).send('something went wrong : ' + err.message);
    }
})

app.listen(PORT, () => {
    console.log('server listening on port ' + PORT);
})
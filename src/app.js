const express = require('express');
const app = express();
const PORT = 3000;

app.get('/user', (req, res) => {
    res.send({
        firstName: "Jaswanth",
        lastName: "Kumar",
    });
})

app.post('/user', (req, res) => {
    // Add user to DB
    res.send("User Data saved successfully");
})

app.put('/user', (req, res) => {
    // Update the user in DB
    res.send("User Data updated successfully");
})

app.delete('/user', (req, res) => {
    // Delete user from DB
    res.send("User Data deleted successfully");
})

app.use('/', (req, res) => {
    res.send('Welcome to devTinder');
})
app.listen(PORT, () => {
    console.log('server listening on port ' + PORT);
})
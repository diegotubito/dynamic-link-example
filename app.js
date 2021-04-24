require('./config.js');
const express = require('express')
const app = express()
const port = process.env.PORT;

app.use( express.static('public'));

app.get('/hola_mundito', function (req, res) {    
    res.send('mmm')
})

app.get('/apple-app-site-association', (req, res) => {
    console.log("sending a file");
    res.sendFile( __dirname + '/public/apple/apple-app-site-association');
})

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/error_message/not_found.html');
})
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
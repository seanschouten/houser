require('dotenv').config();
const express = require('express');
// const session = require('express-session');
const massive = require('massive');

const houseCtrl = require('./controller')

const app = express()
app.use(express.json())

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database running')
})

app.listen(SERVER_PORT, () => console.log('Listening on port', SERVER_PORT))
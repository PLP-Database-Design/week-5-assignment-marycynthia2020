const express = require('express')
const app = express()
const mysql = require('mysql2')
const dotenv = require('dotenv')

dotenv.config()

// connect to the databse file
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

//  check if connection is working 
db.connect((err) => {
    if(err) {
        console.log('Error connecting to mysql database')
    } else{
        console.log("connection is succesful with id:", db.threadId)
    }
})

// Retreive all patients
    /*app.get('', (req, res) => { 
        db.query('SELECT * FROM patients', (err, data) => {
            if(err) {
                console.error(err)
                res.status(500).send('errorr retrieving patients')
            } else {
                res.send(data)
            }
        })
    }) */

    // retrieve all providers
    /* app.get('', (req, res) => {
        db.query('SELECT * FROM providers', (err, data) =>{
            if(err) {
                return res.status(500).send('error retriving providers')
            } else {
                res.send(data)
            }
        })
    }) */

        // filters patients by firstname

    /* app.get('', (req, res) => {
        db.query('SELECT first_name FROM patients', (err, data) => {
            if(err) {
                res.status(500).send('error retrieving patients first name')
            } else{
                res.send(data)
            }
        })
    }) */

    // retrieves providers by specilaty
    app.get('', (req, res) => {
        db.query('SELECT first_name, provider_specialty FROM providers', (err, data) => {
            if(err) {
                res.status(500).send('error retrieving provider specialty')
            } else{
                res.send(data)
            }
        })
    })

// listen to the server
const PORT = 3300
app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`)
})


// basic end point 
// app.get('', (req, res) => {
//     res.send('server successful')
// })






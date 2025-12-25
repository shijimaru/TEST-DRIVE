const express = require('express')
const sqlite3 = require('sqlite3').verbose()

const app = express()
const db = new sqlite3.Database('./db/databse.sqlite')

app.get('/', (req, res) => {
    res.send("Server is working!")
})

app.listen(3000, () =>{
    console.log('Server started on port 3000')
})
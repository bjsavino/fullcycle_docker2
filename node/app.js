const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const configMysql = {
    host:"mysql",
    user:"root",
    password:"root",
    database:"peopledb",
    charset:'utf8'
}

app = express();
app.set('views',path.join(__dirname, 'pages'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.get('/', async function(req, res) {
    var connection = await mysql.createConnection(configMysql);
    await connection.connect();
    connection.query("SELECT * FROM people", async (error, results, fields) => {
        res.render('index',{people:results})
    });
    connection.end();
    
});

app.post('/', async function(req, res) {
    var connection = await mysql.createConnection(configMysql);
    await connection.connect();
    console.log(req.body);
    connection.query(`INSERT INTO people (name) VALUES ("${req.body.name}")`, async (error, results, fields) => {
        res.redirect('/');
    });
    connection.end();
    
});

app.listen(3000,()=>console.log("rodando"));
const mysql = require('mysql');


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'minesweeper'
})

con.connect( err => {
    if (err) {
        console.error(err);
    }
    console.log('Connected!')
})
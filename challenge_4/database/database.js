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

const getTable = (callback) => {
    const queryString = `SELECT * FROM minesweeper;`;

    con.query(queryString, (err, data) => {
        if (err) {
            console.error(err);
        }
        callback(null, data);
    });
}

const replaceRow = (cell, callback) => {
    console.log(cell)
    // const queryString = `UPDATE minesweeper SET ${cell.className}Value = 'Clicked' WHERE id = ${cell.id};`;
    const queryString = `REPLACE INTO minesweeper (id, ${cell.className}Value) VALUES (${cell.id}, 'clicked');`;
        // need to finish the queryString once I can pass information and 
        // visually see what I get back

    con.query(queryString, (err, data) => {
        if (err) {
            console.error(err);
        }
        callback(null, data);
    })
}


module.exports = {getTable, replaceRow}
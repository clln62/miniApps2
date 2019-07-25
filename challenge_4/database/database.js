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

const replaceRow = (row, callback) => {
    const queryString = `REPLACE INTO minesweeper (id, column1, 
        column1Value, column2, column2Value, column3, column3Value, 
        column4, column4Value, column5, column5Value, column6, 
        column6Value, column7, column7Value, column8, column8Value, 
        column9, column9Value, column10, column10Value) VALUES (${row.id});`;
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
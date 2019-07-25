const express = require('express');
var bodyParser = require('body-parser');
const db = require('./database/database.js');

const app = express();

app.use( express.static(__dirname + '/client/dist') );
app.use( bodyParser.json() );




app.get( '/getTable', (req, res) => {
    db.getTable( (err, data) => {
        if (err) {
            console.error(err);
            res.end();
        }
        // when webpack is set up, check console.log and continue
        // to pass the table to app.jsx and save in state
        // console.log(data);
    })
})

app.post( '/changeRow', (req, res) => {
    console.log(req.body);
    db.replaceRow( (err, data) => {
        if (err) {
            console.error(err);
            res.end();
        }
        // like with the get request, once I can visually see things 
        // and pass info, I can finish this function
        // console.log(data);
    })
})






app.listen(3000, () => {
    console.log('Listening on port 3000!');
})
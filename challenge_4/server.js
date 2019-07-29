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
        res.send(data);
    })
})

app.post( '/changeCell', (req, res) => {
    let table = req.body.table;
    table.map( element => {
        let column = `${req.body.changeInfo.className}`;
        let columnValue = `${req.body.changeInfo.className}Value`;
        // console.log(element)
        if (element.id == req.body.changeInfo.id) {
            table.columnValue = 'Clicked';
        }
        if (element.id == req.body.changeInfo.id+1) {
            table.columnValue = 'Clicked';
        }
    })
    table.map( element => {
        // console.log(element)
        db.replaceRow( element, (err, data) => {
            if (err) {
                console.error(err);
                res.end();
            }
        })
    })
    res.send('Cells were updated.')
    // db.replaceRow( req.body, (err, data) => {
    //     if (err) {
    //         console.error(err);
    //         res.end();
    //     }
    //     // like with the get request, once I can visually see things 
    //     // and pass info, I can finish this function
    //     // console.log(data);
    //     res.send('Cell has updated!');
    // })
})






app.listen(3000, () => {
    console.log('Listening on port 3000!');
})
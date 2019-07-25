const express = require('express');
var bodyParser = require('body-parser');
const db = require('./database/database.js');

const app = express();

app.use( bodyParser.json());

app.use(express.static(__dirname + '/../challange_4/dist'));











app.listen(3000, () => {
    console.log('Listening on port 3000!');
})
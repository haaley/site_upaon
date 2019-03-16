var express = require('express');
var bodyParser= require('body-parser');
require('dotenv').config()


engine = require('ejs-locals');

const publicRouter = require("./routes");

var app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.engine('ejs', engine);

app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs'); 

app.use('/', publicRouter);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

console.log(process.env.GMAIL_USER);
console.log(process.env.GMAIL_PASS);
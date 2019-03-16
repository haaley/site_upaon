var express = require('express');
var bodyParser= require('body-parser');
require('dotenv').config()


engine = require('ejs-locals');

routes = require("./Routes/public");

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.engine('ejs', engine);

app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs'); 

app.use('/', routes);

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});

console.log(process.env.GMAIL_USER);
console.log(process.env.GMAIL_PASS);
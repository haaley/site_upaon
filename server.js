var express = require('express');
var bodyParser= require('body-parser');
require('dotenv').config()


engine = require('ejs-locals');
app.use('/', routes);

routes = require("./Routes/public");

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.engine('ejs', engine);
app.set('view engine', 'ejs'); 


app.use(express.static(__dirname + '/public'));

app.set('views',__dirname + '/views');


app.listen(port, function () {
  console.log('Example app listening on ', port);
});


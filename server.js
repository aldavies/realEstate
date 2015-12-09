
//dependencies
var express     = require('express');
    mongoose    = require('mongoose');
    bodyparser  = require('body-parser');
    md5         = require('md5');
   cookieParser = require('cookie-parser');

var port        = process.env.PORT || 3000;
var app         = express();

//middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(cookieParser());

//Database

var mongoUri =  process.env.MONGOLAB_URI || 'mongodb://localhost/realEstate';
mongoose.connect(mongoUri);

//Listener

app.listen(port);

//models

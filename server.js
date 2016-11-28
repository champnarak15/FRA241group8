var express = require('express');
var path = require('path');

var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var search = require('./routes/index');
var port = 3000;
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html' ,require('ejs').renderFile);

app.use('/', index);
app.use('/search', index);
app.use('/login',index);
app.use('/tech', index);

app.use('/managebookingroom', index);
app.use('/floorseach', index);
app.use('/floorseach/floor1', index);
app.use('/floorseach/floor2', index);
app.use('/floorseach/floor3', index);
app.use('/book', index);
app.use('/signup', index);
app.use('/book/form', index);
app.use('/book/form/commitform', index);
app.use('/book/form/commitform/formt', index);
app.use('/contact', index);


app.use(express.static(path.join(__dirname, 'client')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(port ,function () {
    console.log('Server started on port'+ port);
});
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var index = require("./routes/index");
var tasks = require("./routes/tasks");

var port = 3000;
var app = express();

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder
app.use(express.static(path.join(__dirname, 'client')));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routing
app.use('/', index);
app.use('/api', tasks)

app.listen(port, function(){
    console.log('Server started on port '+ port);
});
module.exports = app;

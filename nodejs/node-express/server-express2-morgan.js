var express = require('express');
var morgan = require('morgan');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev')); // dev is output morgan supports to print-out

app.use(express.static(__dirname + '/public')); //middle ware public used to submit files

app.listen(port, hostname, function(){
    console.log('Server running at http://${hostname}:${port}/');
});
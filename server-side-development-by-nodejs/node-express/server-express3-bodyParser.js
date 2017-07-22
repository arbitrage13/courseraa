var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';////
var port = 3000;

var app = express();


app.use(morgan('dev')); // dev is output morgan supports to print-out


app.use(bodyParser.json());
////////////////////////////////////////////////////////////

//what to do after get ALL requests

app.all('/dises', function(req, res, next){
    res.writeHead(200, {'Content-Type': 'Text/plan'});
    next();
});

// if i get GET request

app.get('/dishes', function(req,res,next){
    res.end('Will send all the dishes to you!')
});

//if i get POST request

app.post('/dishes', function(req,res,next){
    res.end('Will add this dish: ' + req.body.name + ' with details: ' + req.body.description); // json datatype
});

//if i get DELETE request

app.delete('/dishes', function(req,res,next){
    res.end('Deleting all dishes')
});

// if i get GET request object ID

app.get('/dishes/:dishId', function(req,res,next){
    res.end('Will send detail of the dish: ' + req.params.dishId + ' to you!')
});

// PUT requests

app.put('/dishes/:dishId', function(req,res,next){
    rew.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

//Delete dishesId

app.delete('/dishes/:dishId', function(req,res,next){
    res.end('Deleting dish: ' + req.params.dishId);
});

///////////////////////////////////////////////////////////////

app.use(express.static(__dirname + '/public')); //middle ware public used to submit files

app.listen(port, hostname, function(){
    console.log('Server running at http://${hostname}:${port}/');
});
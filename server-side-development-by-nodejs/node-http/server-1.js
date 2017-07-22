var http = require('http');

var hostname = 'localhost';
var port = 3000;

//to creat the server HTTP module

var server = http.createServer(function(req, res){
    console.log(req.headers); // get access to the header of msg

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World</h1>'); // only code that going to send back
})

//to start the server

server.listen(port, hostname, function(){
    console.log('Server running at http://${hostname}:${port}/');
});
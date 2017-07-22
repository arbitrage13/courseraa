var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 3000;

//construct the ways to respond
var server = http.createServer(function(req,res){
    console.log('Request for ' + req.url + ' by method ' + req.method); // check whether its GET method.

    if(req.method == 'GET'){

        var fileUrl;
        // if req.url ends with /
        if(req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;
        //system uses filePath to access the files
         // setup filePaht // correspond to the current folder public
        var filePath = path.resolve('./public' + fileUrl);
        // check extension
        var fileExt = path.extname(filePath); 

        if (fileExt == '.html'){
            fs.exists(filePath, function(exists){
                
                if(!exists){          // check file exists
                res.writable(404, { 'Content-Type': 'text/html' });
                res.end('<h1>Error 404:' + fileUrl + 'not found</h1>');
                return;
            }
                res.writeHead(200, { 'Content-Type': 'text/html'});
                fs.createReadStream(filePath).pipe(res); // createReadStream to read the file and pipe the response message

        });
    }
    else{
        res.writeHead(404,{ 'Content-Type': 'text/html'});
        res.end('<h1>Error 404:' + req.method + 'not supported</h1>');

    }
}
})    

server.listen(port,hostname,function(){
    console.log('Server running at http:://${hostname}:${port}/');
});
        
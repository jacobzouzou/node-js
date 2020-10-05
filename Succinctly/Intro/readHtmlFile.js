var http=require('http');
var fs= require('fs');
var server=http.createServer((request, response)=>{
    response.writeHead(200, {'ContentType':'text/html'});
    fs.readFile('./index.html', (err,file)=>{
        response.end(file)
    });
})

server.listen(8000,()=>{
    console.log("Server runing on port: 8000"); 
})
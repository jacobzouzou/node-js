const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Hello World !");
});

server.listen(4242, () => {
    console.log("Server is runing on port: 4242");
});
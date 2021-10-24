const http = require('http');

const server = http.createServer((request,response) => {
    if(request.url == '/'){
        response.end("Welcome to our website");
    }
    else if(request.url == '/about'){
        response.end("About our company");
    }
    else{
        response.write(`<h1>Page not found..</h1>`);
    }
    //response.end();
});

server.listen(5000);
console.log("listening on port 5000");
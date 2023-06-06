const http = require('http');
const fs = require('fs')
const url = require('url');


var dataList = fs.readFileSync('./data.json', 'utf-8');
var dataObj = JSON.parse(dataList);

const server = http.createServer((request, response) => {
    const {query, pathname} = url.parse(request.url, true);

    if(pathname === '/api'){
        response.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' });
        response.end(JSON.stringify(dataObj));
    }

    else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end('404');
    }
});

server.listen(2700, '127.0.0.1', () => console.log("Server STARTED!"));
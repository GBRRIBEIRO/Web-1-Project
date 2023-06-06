const http = require('http');
const fs = require('fs')

var dataList = fs.readFileSync('./data.json', 'utf-8');
var dataObj = JSON.parse(dataList);

const server = http.createServer((request, response) => {
    
});

server.listen(2700, '127.0.0.1', () => console.log("Server STARTED!"));
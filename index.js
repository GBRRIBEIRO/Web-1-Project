const http = require('http');
const fs = require('fs')

var dataList = fs.readFileSync('./data.json', 'utf-8');
var dataObj = JSON.parse(dataList);

const server = http.createServer((request, response) => {
    
    const cu = dataObj.map((element) => console.log(element));
});
server.listen(2700, '127.0.0.1', () => console.log("Server STARTED!"));
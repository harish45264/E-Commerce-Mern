//get http
const requestHandler = require('./routing');
const http = require('http')
const fs = require('fs');

const server = http.createServer(requestHandler);
    
server.listen(3000, () => {
    console.log("Server Listening to 3000!");
});
const http = require('http');

let {requestListener} = require('./callbackFile.js');
const PORT = process.env.port || 4001;

const server = http.createServer(requestListener);

server.listen(PORT);

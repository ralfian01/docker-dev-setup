const http = require('http');

const requestListener = (req, res) => {
    res.writeHead(200);
    res.end('Nodejs Worked\n');
};

const server = http.createServer(requestListener);

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

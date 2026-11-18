const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('DevOps Galileo team is the BEST!\n');
  console.log('Printed: DevOps Galileo team is the BEST!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Node app listening on port ${port}`);
});
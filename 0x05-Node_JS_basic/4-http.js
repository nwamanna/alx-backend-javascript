const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } if (req.url === '/students') {
    res.end('This is the list of our students');
  }
});

module.exports = app;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

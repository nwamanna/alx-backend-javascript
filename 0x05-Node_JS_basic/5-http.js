const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  // Create a variable to capture console output
  let consoleOutput = '';

  // Override console.log to capture the output
  const originalConsoleLog = console.log;
  console.log = (message) => {
    consoleOutput += `${message}\n`;
  };

  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then(() => {
        // Restore the original console.log
        console.log = originalConsoleLog;

        // Send the captured console output in the HTTP response
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`This is the list of our students\n${consoleOutput}`);
      })
      .catch((error) => {
        // Restore the original console.log even in case of an error
        console.log = originalConsoleLog;

        console.error(error.message);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

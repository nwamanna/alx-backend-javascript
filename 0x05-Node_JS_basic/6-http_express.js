// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Specify the port to listen on
const port = 1245;

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

// Export the Express app for external use (e.g., testing)
module.exports = app;

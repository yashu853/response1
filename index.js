const http = require('http');

const server = http.createServer((req, res) => {
  let message = '';
  let statusCode = 200;

  // Route matching
  if (req.url === '/') {
    message = 'Hello World';
  } else if (req.url === '/pizza') {
    message = 'This is your pizza';
  } else if (req.url === '/home') {
    message = 'Welcome home';
  } else if (req.url === '/about') {
    message = 'Welcome to About Us';
  } else if (req.url === '/node') {
    message = 'Welcome to my Node Js project';
  } else {
    message = '404 - Page Not Found';
    statusCode = 404;
  }

  // Send HTML response
  res.writeHead(statusCode, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Node.js Response</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
          background-color: #f5f5f5;
        }
        nav a {
          margin-right: 15px;
          text-decoration: none;
          color: #007BFF;
        }
        nav a:hover {
          text-decoration: underline;
        }
        h1 {
          color: #333;
        }
      </style>
    </head>
    <body>
      <nav>
        <a href="/">Root</a>
        <a href="/pizza">Pizza</a>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/node">Node Project</a>
        <a href="/random">Invalid Link</a>
      </nav>
      <h1>${message}</h1>
    </body>
    </html>
  `);
});

// Start the server
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

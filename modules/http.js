const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Hello, World!</h1>');
    }

    if (req.url === '/users') {
        const users = [
            { 
                name: 'Lorem Ipsum',
                email: 'loremipsum@gmail.com',
            },
            {
                name: 'Dolor Sit',
                email: 'dolorsit@gmail.com',
            }
        ];

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
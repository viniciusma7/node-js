const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.contentType('application/html');
    res.status(200).send('<h1>Hello, World!</h1>');
})

app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'Lorem Ipsum', email: 'loremipsum@gmail.com' },
        { id: 2, name: 'Dolor Sit', email: 'dolorsit@gmail.com' },
        { id: 3, name: 'Amet Consectetur', email: 'ametconsectetur@gmail.com' },
    ];

    res.json(users).status(200);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
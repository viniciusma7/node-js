const { Person } = require('./person');
const dotenv = require('dotenv');
const connectDb = require('./src/database/connect');

dotenv.config();

connectDb();

// require('./modules/path');
// require('./modules/fs');
// require('./modules/http');
// require('./modules/express');

const person = new Person('Vinicius');
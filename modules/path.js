const path = require('path');

// only the name of the file
console.log(path.basename(__filename));

// only the name of the directory
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));

// path join
console.log(path.join(__dirname, 'test', 'hello.html'));
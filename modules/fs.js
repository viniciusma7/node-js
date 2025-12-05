const fs = require('fs');
const path = require('path');

// Create a new directory
fs.mkdir(path.join(__dirname, '/test'), 
  {}, 
  (err) => {
  if (err) {
    return console.log('Error creating directory:', err);
  };

  console.log('Directory created...');
});

// Create and write to a file
fs.writeFile(path.join(__dirname, '/test', 'test.txt'),
  'Hello World!',
  (err) => {
  if (err) {
    return console.log('Error writing file:', err);
  };

  console.log('File written...');

  // Append to a file
  fs.appendFile(path.join(__dirname, '/test', 'test.txt'),
    '\nI love Node.js', 
    (err) => {
    if (err) {
      return console.log('Error appending to file:', err);
    };

    console.log('File appended...');
  });

  // Read a file
  fs.readFile(path.join(__dirname, '/test', 'test.txt'),
    'utf-8',
    (err, data) => {
    if (err) {
      return console.log('Error reading file:', err);
    };

    console.log('File read:');
    console.log(data);
  });
});

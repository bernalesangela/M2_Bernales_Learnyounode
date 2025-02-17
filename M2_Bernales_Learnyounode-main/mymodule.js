const mymodule = require('./mymodule');

const directoryPath = process.argv[2];
const extension = process.argv[3];

mymodule(directoryPath, extension, (err, files) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  files.forEach(file => console.log(file));
});
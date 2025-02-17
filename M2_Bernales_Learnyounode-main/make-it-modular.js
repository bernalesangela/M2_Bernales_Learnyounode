const filterFiles = require('./filterFiles');

const directoryPath = process.argv[2];
const extension = process.argv[3];

filterFiles(directoryPath, extension, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  files.forEach(file => {
    console.log(file);
  });
});
const fs = require('fs');
fs.rename('C:/Users/TEMP/Documents/first_read.txt', 'C:/Users/TEMP/Documents/sample.txt' ,err => {
  if (err) {
    console.error(err);
    return;
  }
});

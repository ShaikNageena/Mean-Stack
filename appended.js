// appeding

// appeding contents to the existing file
// here the old contents will not be rewritten with the new contents:
/*const fs = require('fs');

const content = 'new appended data!';
fs.appendFile('C:/Users/TEMP/Documents/append.txt', content, err => {
  if (err) {
    console.error(err);
	}
	else{
	console.log("Successfully written");
	}
});

/*output:
C:\Users\TEMP\Desktop>node appended.js
Successfully written
*/

// to check whether the contents have been appended or not

const fs = require('fs');
fs.readFile('C:/Users/TEMP/Documents/append.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
/*output:

C:\Users\TEMP\Desktop>node appended.js
new appended data!new appended data!
*/
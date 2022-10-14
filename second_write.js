//WRITING INTO THE FILE

// If content is already present in the given s[ecified file: Then the file which is existting is rewritten with the new contents.
/*const fs = require('fs');

const content = 'Writing contents to the file!';
fs.writeFile('C:/Users/TEMP/Documents/first.txt', content, err => {
  if (err) {
    console.error(err);
	}
	else{
	console.log("Successfully written");
	}
});


/*output:
C:\Users\TEMP\Desktop>node second_write.js
Successfully written
*/

//To check whether the contents have been written or not
 
 const fs = require('fs');
fs.readFile('C:/Users/TEMP/Documents/first.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
/*
therefore the text from the first file is removed and overwritten with new contents.
output:
C:\Users\TEMP\Desktop>node second_write.js
Writing contents to the file!
*/
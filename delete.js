// deleting a file
var fs=require('fs');
fs.unlink('C:/Users/TEMP/Documents/first.txt',function(err){
			if(err)
				console.log(err);
			else
				console.log('File Deleted!');
			});
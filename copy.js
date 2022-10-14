//copying contents to the file

var fs=require ('fs');
var txt='hy this is ';
fs.writeFile('C:/Users/TEMP/Documents/first_read.txt',txt,function(err){
                      if(err)
     console.log(err);
else
console.log('write operation in src');

});
var data =fs.readFileSync('C:/Users/TEMP/Documents/first_read.txt','utf8');
console.log(data);
fs.writeFile('des2.txt',data,function(err){
                      if(err)
     console.log(err);
else
console.log('write operation in dest');
console.log(data);

});

output:

C:\Users\TEMP\Desktop>node copy.js
hy this is
write operation in src
write operation in dest
hy this is

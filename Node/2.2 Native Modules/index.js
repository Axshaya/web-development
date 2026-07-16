const fs=require("fs");
fs.readFile("message1.txt", 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 
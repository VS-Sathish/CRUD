const fs = require("fs");

const abbreavtion = "HTML - Hyper Text Markup Language";

const [, , noOfFiles] = process.argv;

for (let i = 1; i <= noOfFiles; i++) {
  fs.writeFile(`./Random/awseome-${i}.html`, abbreavtion, (err) => {
    console.log("File created successfully");
  });
}

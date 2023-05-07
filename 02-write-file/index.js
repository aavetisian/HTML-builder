const fs = require("fs");
const path = require("path");

const { stdout, stdin, exit } = process;
stdout.write("Hey there! Please enter some text\n");
stdin.on("data", data =>{
    const filePath = path.join(__dirname, "file.txt");
    const writeStream = fs.createWriteStream(filePath);
    if(data.toString().trim() === "exit"){
        stdout.write("Thank you, BYE!");
        exit();
    }
    writeStream.write(data);
    
});

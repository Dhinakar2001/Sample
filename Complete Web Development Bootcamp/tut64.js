// const fs = require("fs");
// const text = fs.readFileSync("dele.txt", "utf-8")
// console.log("The content of the file is")
// console.log(text);

const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("browser", "Rohan");
console.log("Creating a new file...")
fs.writeFileSync("rohan.txt", text);
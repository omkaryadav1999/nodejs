const path = require("path");

console.log(path.dirname("C:\Users\omkar\Desktop\nodejs\src"));

console.log(path.extname("C:\Users\omkar\Desktop\nodejs\src\index.js"));

console.log(path.basename("/src/index.js"));

console.log(path.parse("/src/index.js"));

console.log(path.join(__dirname, "files"));
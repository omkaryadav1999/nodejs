const fs = require("fs");
const path = require("path");
const filname = path.join(__dirname, "apple.txt");


fs.writeFile(filname, "omkar sanjay yadav", (err) => {
    if (!err) console.log("the file is created")
});


// update the file

fs.appendFile(filname, "and i am the software developer", (err, item) => {
    if (!err) console.log("the file is updated")
});


//read the file:

fs.readFile(filname, "utf8", (err, item) => {
    if (!err) console.log(item)
});

// rename the file

fs.rename(filname, path.join(__dirname, "omkar.txt"), (err) => {
    if (!err) console.log("file rename successfully")
});


// delete the file:

fs.unlinkSync(filname, (err) => {
    if (!err) console.log("file deleted")
});



// create the folder

// const fs = require("fs")
// const path = require("path")

// fs.mkdir(path.join(__dirname, "/text"), (err) => {
//     if (!err) console.log("folder is created")
// })
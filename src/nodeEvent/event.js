const EventEmitter = require("events")
const handler = new EventEmitter()

handler.on("scream", (code, msg) => {
    console.log(`the status code is ${code} and msg is ${msg}`);
})

handler.emit("scream", 200, "ok");


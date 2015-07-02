// Watch or monitor changes occur in a file
var fs = require("fs");
console.log("pgm starts...");
var content= JSON.parse(fs.readFileSync("config.json"));
console.log("Initial File : \n", content);

fs.watchFile("config.json" , function (current, previous) {
	content= JSON.parse(fs.readFileSync("config.json"));
	console.log("Changed File :\n", content);
});

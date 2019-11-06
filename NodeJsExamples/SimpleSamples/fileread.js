

const fs = require('fs');

if (process.argv.length < 3) {

	console.log("Please provide a file name to read");
	process.exit(1);
}

var fileName = process.argv[2];
var fileExists = fs.existsSync(fileName);

if (!fileExists) {

	console.log(`The file ${fileName} DOES NOT  exist.`);
	process.exit(1);
}


var fileContent = fs.readFileSync(fileName, 'utf8');
console.log(fileContent);

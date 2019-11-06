
var title = "Running param test";

console.log(title);

if (process.argv.length < 3) {
	console.log("Please provide a number to the program");
	process.exit(1);
}

var numberToPrint = 0;

if (process.argv.length > 2) {
	numberToPrint = Number(process.argv[2]);	
}


if (Number.isNaN(numberToPrint)) {

	console.error("Please provide a number...");
	process.exit(1);

} else {

	var line = "#";
	for(var i=0; i<numberToPrint; i++) {

		console.log(line);
		line += "#";
	}
}

console.log("done");

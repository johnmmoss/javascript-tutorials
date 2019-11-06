
function StringPadder() {}

StringPadder.prototype.pad = function(toPad, width) {

	if (toPad.length === width) {
		return toPad;
	}

	let i 			= 0;
	let output 		= toPad;
	let toPadWidth 	=  width - toPad.length;

	while (i < toPadWidth) {

		output = "0" + output;

		i++;
	}
	return output;
}

/**
function padString(toPad, width) {

	let i = 0;
	let output = toPad;
	while (i < width) {

		output = "0" + output;
		console.log(output);

		i++;
	}
	return output;
}

let test = padString("22", 6);
**/

module.exports = StringPadder;



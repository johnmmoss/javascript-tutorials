
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

module.exports = StringPadder;



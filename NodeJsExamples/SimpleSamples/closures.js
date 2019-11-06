
//
// Simple closure example
//
function wrapValue(val) {
	let local = val;
	return function () {
			return local;
		}
}

var wrapped100 = wrapValue(100);
var wrapped44 = wrapValue(44);

console.log(wrapped100());
console.log(wrapped44());

//
// Closure Multiplier
//
function multiplier(factor) {

	return number => number * factor;
}

let twice = multiplier(2);

console.log(twice(2));


let tens = multiplier(10);

console.log(tens(33));

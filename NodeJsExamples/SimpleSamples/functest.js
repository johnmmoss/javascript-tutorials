
const goodbye = () => console.log("goodbye");

// Arrow functions need to be declared BEFORE they are used.

const goodbye2 = (x) => {

	if (x == undefined) {
		console.log("Goodbye!!");
	} else {
		for(let i=0; i<x; i++) {

			console.log("Goodbye!");
		}
	}
}

// This style also need to be declared BEFORE they are used
const wave = function wave() {
	console.log("Wavewavewave");
}

hello();
console.log("Outside the loop: " + greeting);
hello();
wave();
hello();
goodbye();
wave();
goodbye2();
goodbye2(3);

var greeting = "hello2";

// These style functions can be declared after they are used.

function hello() {
	greeting = "hello2";
	console.log(greeting);
}



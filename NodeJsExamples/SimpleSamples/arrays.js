
let scores = [25, 5, 8, 44, 17];

//Arrays, are just a kind of object specialized for storing sequences of things.

Marijn Haverbeke. Eloquent JavaScript (Kindle Location 1603). Kindle Edition. 

let colors = ["red", "yellow", "pink", "blue"];

let confused = ["one", 2, "THREE", 4, 5, "six"];

console.log(scores);

console.log(scores[3]);

// The elements of an array are stored as the array's properties
// Using numbers as properties(?)
console.log(colors.red);    // undefined
console.log(colors["red"]); // undefined

console.log(colors.length);
console.log(scores["length"]);

// Colors Array
for(let i=0; i<colors.length; i++) {
    console.log(colors[i].toUpperCase());
}
// Confused Array
for(let i=0; i < confused.length; i++) {
    console.log(confused[i]);
}

// push and pop exist natively on arrays

colors.push("purple");
console.log(colors[4]); // Purple

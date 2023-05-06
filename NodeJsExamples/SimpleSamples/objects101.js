
let me = {
    name: "John",
    age: "21",
    hobbies: ["Football", "Running", "Coding"]
}

let friend = {
    name:"matt",
    age: "20",
    hobbies: ["Football", "Cycling", "Pissing me off"]
}

let sport = {
    displayName : "Football",
    type:"ball game",
    popularity:"100%"
}

console.log(me.name);
console.log(me.hobbies[2]);
console.log(Object.keys(me));

// Object.assign function that copies all properties from one object into another:

Object.assign(me, sport);

console.log(Object.keys(me));

// We can use typeof to determine if value is string, number, boolean or object
console.log(typeof me);
console.log(typeof me.name);
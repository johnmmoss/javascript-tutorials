
require('./scripts.js')

// Test that require is working...
for (let v of SCRIPTS) {
    console.log(v.name);
}

// Example filter method
function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}


// Display only scripts which are currently in use...
console.log(
    SCRIPTS.filter(s => s.direction == "ttb")
        .map(x => x.name));

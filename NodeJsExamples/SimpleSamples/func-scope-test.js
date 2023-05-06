let bob = {
  name: "bob",
};

function updateName(b) {
  let temp = b;
  temp.name = "john";
}

updateName(bob);

console.log(bob.name);

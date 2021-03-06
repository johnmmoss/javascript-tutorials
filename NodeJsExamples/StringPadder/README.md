
# StringPadder Function

StringPadder is a practice of unit testing using Mocha, Jasmine and Chai. To run the unit tests cd to the project directory and:

```
npm install
mocha tests\test.js
```

usepad.js is a console app using the function which can be demonstrated like so:

```
node usepad.js
```

Use pad pads the number 22 with 30 zeros.

## Creating the unit tests

Following along these tutorials:

* [Unit Test Tutoiral](https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d/)
* [Chai Cheatsheat](https://devhints.io/chai)

Start by creating a javascript app with tests, you use the test framework mocha with chai. Start off by creating a simple node application:

```
mkdir TestProject1
cd TestProject1
npm init
```

Create a file index.js and a test file called index.test.js in the same directory.

### Mocha

Install mocha globally to be able to run the tests. As it is installed globally, there is nothing in the local package.json that indicates that the 

```
npm i --global mocha
```
Then you can run the tests by calling:
```
mocha <path-to-test>
```
For example to run the string padder tests run from the StringPadder directory:
```
mocha tests\test.js
```
### Chai

Chai is the assertion library. This is actually installed into the local project. For more info about various assertions see the cheat sheat below.

### Basic Test Template
```
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai

describe('ChaiTest', function() {

  it('Returns true when do a simple test', function() {

    let start = 1;

    expect(start).to.equal(1);
  });  
});
```

## Resources

* [Unit Test Tutoiral](https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d/)
* [Chai Cheatsheat](https://devhints.io/chai)

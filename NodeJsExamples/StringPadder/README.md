
## Example JavaScript Unit Test

To create a javascript app with tests, you use the test framework mocha with chai. Start off by creating a simple node application using:

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